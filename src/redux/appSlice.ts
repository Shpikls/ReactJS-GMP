import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootStore } from '~/redux/store'

export interface AppState {
	loading: boolean
	modal?: 'add' | 'edit' | 'delete'
	targetId?: number
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
		addOpen(state: AppState) {
			return {
				...state,
				modal: 'add',
			}
		},
		editOpen(state: AppState, action: PayloadAction<AppState['targetId']>) {
			return {
				...state,
				modal: 'edit',
				targetId: action.payload,
			}
		},
		deleteOpen(state: AppState, action: PayloadAction<AppState['targetId']>) {
			return {
				...state,
				modal: 'delete',
				targetId: action.payload,
			}
		},
		closeModal(state: AppState) {
			return {
				...state,
				modal: undefined,
				targetId: undefined,
			}
		},
	},
})

export const { loadingOn, loadingOff, addOpen, closeModal, editOpen, deleteOpen } = appSlice.actions

export default appSlice.reducer

export const appSelectors = {
	loading: (store: RootStore): boolean => store.app.loading,
}
