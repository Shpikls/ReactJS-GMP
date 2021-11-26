import { AnyAction } from '@reduxjs/toolkit'
import reducer, { genreSelectors, setGenre } from './genreSlice'
import { RootStore } from './store'

describe('Test genreSlice.ts', () => {
	test('should return the initial state', () => {
		expect(reducer(undefined, {} as AnyAction)).toEqual([])
	})

	test('should handle a setGenre', () => {
		expect(reducer(['Action', 'Horror'], setGenre(['History', 'Detective']))).toEqual(['History', 'Detective'])
	})

	test('selectors testing', () => {
		const store: RootStore = {
			genre: ['History', 'Detective'],
		} as RootStore

		expect(genreSelectors.genre(store)).toEqual(['History', 'Detective'])
	})
})
