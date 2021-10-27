import { AnyAction, createSlice, PayloadAction, ThunkAction } from '@reduxjs/toolkit'
import { fetchMovie, Query } from '~/queries/getMovies'
import { loadingOff, loadingOn } from '~/redux/appSlice'
import { RootStore } from '~/redux/store'
import { Item } from '~/types'
import { setGenre } from './genreSlice'

export interface MoviesStore {
	totalAmount: number
	totalGenres: string[]
	data: Item[]
}

const initialState: MoviesStore = {
	totalAmount: 0,
	totalGenres: [],
	data: [],
}

const moviesSlice = createSlice({
	name: 'movies',
	initialState,
	reducers: {
		pushMovies(store: MoviesStore, action: PayloadAction<MoviesStore>) {
			return action.payload
		},
	},
})

export const { pushMovies } = moviesSlice.actions

export const getMoviesByQuery = (
	query?: Query,
	isSetGenre?: boolean,
): ThunkAction<void, RootStore, unknown, AnyAction> => {
	return (dispatch) => {
		dispatch(loadingOn())

		fetchMovie(query).then((data) => {
			dispatch(pushMovies(data))
			if (isSetGenre) dispatch(setGenre(data.totalGenres))
			dispatch(loadingOff())
		})
	}
}

export default moviesSlice.reducer

export const moviesSelectors = {
	totalFound: (store: RootStore): number => store.movies.totalAmount,
	data: (store: RootStore): Item[] => store.movies.data,
	totalGenres: (store: RootStore): string[] => store.movies.totalGenres,
}
