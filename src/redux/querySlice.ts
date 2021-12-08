import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootStore } from '~/redux/store'

export interface QueryState {
	search?: string
	searchBy?: string
	filter?: string
	sortBy?: string
	sortOrder?: string
	movie?: number
}

const initialState: QueryState = {}

const querySlice = createSlice({
	name: 'query',
	initialState,
	reducers: {
		setSearch(state: QueryState, action: PayloadAction<string>) {
			return {
				...state,
				searchBy: 'title',
				search: action.payload,
			}
		},
		clearSearch(state: QueryState) {
			return {
				...state,
				searchBy: undefined,
				search: undefined,
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
		clearSort(state: QueryState) {
			return {
				...state,
				sortBy: undefined,
				sortOrder: undefined,
			}
		},
		setMovie(state: QueryState, action: PayloadAction<number>) {
			return {
				...state,
				movie: action.payload,
			}
		},
		clearMovie(state: QueryState) {
			return {
				...state,
				movie: undefined,
			}
		},
	},
})

export const { setSearch, setGenre, setSort, clearSearch, clearSort, setMovie, clearMovie } = querySlice.actions

export default querySlice.reducer

export const querySelectors = {
	filter: (store: RootStore): string | undefined => store.query.filter,
	all: (store: RootStore): QueryState => store.query,
}
