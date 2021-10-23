import { createSlice } from '@reduxjs/toolkit'
import { RootStore } from '~/redux/store'

export interface AppState {
	loading: boolean
}

const initialState: AppState = {
	loading: true,
}

const appSlice = createSlice({
	name: 'app',
	initialState,
	reducers: {
		loadingOn(state: AppState) {
			return {
				...state,
				loading: true,
			}
		},
		loadingOff(state: AppState) {
			return {
				...state,
				loading: false,
			}
		},
	},
})

export const { loadingOn, loadingOff } = appSlice.actions

export default appSlice.reducer

export const appSelectors = {
	loading: (store: RootStore): boolean => store.app.loading,
}
