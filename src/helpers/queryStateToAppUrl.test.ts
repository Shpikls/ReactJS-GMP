import { QueryState } from '~/redux/querySlice'
import { queryStateToAppUrl } from './queryStateToAppUrl'

const query: QueryState = {
	search: 'title',
	filter: 'filter',
	sortBy: 'sortBy',
	movie: 666,
}

describe('Test queryStateToAppUrl function', () => {
	test('Only query state', () => {
		const result = queryStateToAppUrl(query)

		expect(result).toBe('search=title&genre=filter&sortBy=sortBy&movie=666')
	})

	test('Set new parameters', () => {
		const result = queryStateToAppUrl(query, { search: 'New', genre: 'Action', sortBy: 'genres', movie: '777' })

		expect(result).toBe('search=New&genre=Action&sortBy=genres&movie=777')
	})

	test('Set default parameters', () => {
		const result = queryStateToAppUrl(query, { search: '', genre: false, sortBy: 'default', movie: false })

		expect(result).toBe('')
	})
})
