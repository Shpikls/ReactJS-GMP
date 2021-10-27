import { AnyAction, createSlice, PayloadAction, ThunkAction } from '@reduxjs/toolkit'
import { RootStore } from '~/redux/store'
import { loadingOn } from './appSlice'
import { getMoviesByQuery } from './moviesSlice'

export interface QueryState {
	search?: string
	searchBy?: string
	filter?: string
	sortBy?: string
	sortOrder?: string
}

const initialState: QueryState = {}

const querySlice = createSlice({
	name: 'query',
	initialState,
	reducers: {
		setSearch(state: QueryState, action: PayloadAction<string>) {
			return {
				searchBy: 'title',
				search: action.payload,
			}
		},
		setGenre(state: QueryState, action: PayloadAction<string | undefined>) {
			return {
				...state,
				filter: action.payload,
			}
		},
		setSort(state: QueryState, action: PayloadAction<{ sortBy: string; sortOrder: string }>) {
			return {
				...state,
				sortBy: action.payload.sortBy,
				sortOrder: action.payload.sortOrder,
			}
		},
	},
})

export const movieSearch = (search: string, setGenre?: boolean): ThunkAction<void, RootStore, unknown, AnyAction> => {
	return (dispatch, getStore) => {
		dispatch(setSearch(search))
		const query = getStore().query
		dispatch(getMoviesByQuery(query, setGenre))
	}
}

export const movieGenres = (genre?: string): ThunkAction<void, RootStore, unknown, AnyAction> => {
	return (dispatch, getStore) => {
		dispatch(setGenre(genre))
		const query = getStore().query
		dispatch(getMoviesByQuery(query))
	}
}

export const changeSort = (value: string): ThunkAction<void, RootStore, unknown, AnyAction> => {
	return (dispatch, getState) => {
		dispatch(loadingOn())
		dispatch(setSort({ sortBy: value, sortOrder: 'desc' }))
		const query = getState().query
		dispatch(getMoviesByQuery(query))
	}
}

export const { setSearch, setGenre, setSort } = querySlice.actions

export default querySlice.reducer

export const querySelectors = {
	filter: (store: RootStore): string | undefined => store.query.filter,
}
