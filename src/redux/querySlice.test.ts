import { AnyAction } from '@reduxjs/toolkit'
import { RootStore } from '~/redux/store'
import reducer, {
	clearMovie,
	clearSearch,
	clearSort,
	querySelectors,
	setGenre,
	setMovie,
	setSearch,
	setSort,
} from './querySlice'

describe('Test querySlice.ts', () => {
	test('should return the initial state', () => {
		expect(reducer(undefined, {} as AnyAction)).toEqual({})
	})

	test('should handle a setSearch', () => {
		const newStore = {
			searchBy: 'title',
			search: 'fff',
		}

		expect(reducer(undefined, setSearch('fff'))).toEqual(newStore)
	})

	test('should handle a clearSearch', () => {
		const oldStore = {
			searchBy: 'title',
			search: 'fff',
		}

		expect(reducer(oldStore, clearSearch())).toEqual({})
	})

	test('should handle a setGenre', () => {
		const newStore = {
			filter: 'blabla',
		}

		expect(reducer(undefined, setGenre('blabla'))).toEqual(newStore)
	})

	test('should handle a setSort', () => {
		const newStore = {
			sortBy: 'release',
			sortOrder: 'desc',
		}

		expect(reducer(undefined, setSort(newStore))).toEqual(newStore)
	})

	test('should handle a clearSort', () => {
		const prevStore = {
			sortBy: 'release',
			sortOrder: 'desc',
		}

		expect(reducer(prevStore, clearSort())).toEqual({})
	})

	test('should handle a setMovie', () => {
		const newStore = {
			movie: 111,
		}

		expect(reducer(undefined, setMovie(111))).toEqual(newStore)
	})

	test('should handle a clearMovie', () => {
		const prevStore = {
			movie: 111,
		}

		expect(reducer(prevStore, clearMovie())).toEqual({})
	})

	test('selectors testing', () => {
		const queryStore = {
			search: 'fff',
			searchBy: 'ddd',
			filter: 'wee',
			sortBy: 'qwe',
			sortOrder: 'sdd',
			movie: 777,
		}

		const store: RootStore = {
			query: queryStore,
		} as RootStore

		expect(querySelectors.all(store)).toEqual(queryStore)
		expect(querySelectors.filter(store)).toEqual('wee')
	})
})
