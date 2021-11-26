import { AnyAction } from '@reduxjs/toolkit'
import { RootStore } from '~/redux/store'
import { Item } from '~/types'
import reducer, { moviesSelectors, pushMovies } from './moviesSlice'

describe('Test moviesSlice.ts', () => {
	test('should return the initial state', () => {
		expect(reducer(undefined, {} as AnyAction)).toEqual({ totalAmount: 0, totalGenres: [], data: [] })
	})

	test('should handle a pushMovies', () => {
		const newStore = {
			totalAmount: 5,
			totalGenres: ['Horror', 'Adventure'],
			data: [] as Item[],
		}
		expect(reducer(undefined, pushMovies(newStore))).toEqual(newStore)
	})

	test('selectors testing', () => {
		const store: RootStore = {
			movies: {
				totalAmount: 5,
				totalGenres: ['Horror', 'Adventure'],
				data: [] as Item[],
			},
		} as RootStore

		expect(moviesSelectors.totalFound(store)).toEqual(5)
		expect(moviesSelectors.totalGenres(store)).toEqual(['Horror', 'Adventure'])
		expect(moviesSelectors.data(store)).toEqual([])
	})
})
