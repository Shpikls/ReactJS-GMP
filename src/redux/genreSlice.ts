import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootStore } from '~/redux/store'

export type GenreState = string[]

const initialState: GenreState = []

const genreSlice = createSlice({
	name: 'genre',
	initialState,
	reducers: {
		setGenre(state: GenreState, action: PayloadAction<GenreState>) {
			return action.payload
		},
	},
})

export const { setGenre } = genreSlice.actions

export default genreSlice.reducer

export const genreSelectors = {
	genre: (store: RootStore): GenreState => store.genre,
}
