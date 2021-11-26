import { AnyAction } from '@reduxjs/toolkit'
import { RootStore } from '~/redux/store'
import reducer, {
	addOpen,
	appSelectors,
	AppState,
	closeModal,
	deleteOpen,
	editOpen,
	loadingOff,
	loadingOn,
} from './appSlice'

describe('Test appSlice.ts', () => {
	test('should return the initial state', () => {
		expect(reducer(undefined, {} as AnyAction)).toEqual({
			loading: true,
		})
	})

	test('should handle a loading off', () => {
		const previousState = {} as AppState
		expect(reducer(previousState, loadingOff())).toEqual({
			loading: false,
		})
	})

	test('should handle a loading on', () => {
		const previousState = {} as AppState
		expect(reducer(previousState, loadingOn())).toEqual({
			loading: true,
		})
	})

	test('should handle a addOpen', () => {
		const previousState = {} as AppState
		expect(reducer(previousState, addOpen())).toEqual({
			modal: 'add',
		})
	})

	test('should handle a editOpen', () => {
		const previousState = {} as AppState
		expect(reducer(previousState, editOpen(111))).toEqual({
			modal: 'edit',
			targetId: 111,
		})
	})

	test('should handle a addOpen', () => {
		const previousState = {} as AppState
		expect(reducer(previousState, deleteOpen(111))).toEqual({
			modal: 'delete',
			targetId: 111,
		})
	})

	test('should handle a closeModal', () => {
		const previousState = { modal: 'edit', targetId: 1112 } as AppState
		expect(reducer(previousState, closeModal())).toEqual({})
	})

	test('selectors testing', () => {
		const store: RootStore = {
			app: {
				loading: false,
				modal: 'edit',
				targetId: 777,
			},
		} as RootStore

		expect(appSelectors.loading(store)).toEqual(false)
		expect(appSelectors.modal(store)).toEqual('edit')
		expect(appSelectors.id(store)).toEqual(777)
	})
})
