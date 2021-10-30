import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootStore } from '~/redux/store'

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
				sortBy: state.sortOrder,
				sortOrder: state.sortOrder,
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

export const { setSearch, setGenre, setSort } = querySlice.actions

export default querySlice.reducer

export const querySelectors = {
	filter: (store: RootStore): string | undefined => store.query.filter,
	all: (store: RootStore): QueryState => store.query,
}
