import { QueryState } from '~/redux/querySlice'

type NewQuery = {
	search: string
	sortBy: string
	genre: string | false
	movie: string | false
}

export const queryStateToAppUrl = (query: QueryState, newQuery?: Partial<NewQuery>): string => {
	const params = new URLSearchParams()

	if (newQuery && newQuery.search) {
		params.set('search', newQuery.search)
	} else if (query.search) {
		if (!newQuery || newQuery.search !== '') {
			params.set('search', query.search)
		}
	}

	if (newQuery && newQuery.genre) {
		params.set('genre', newQuery.genre)
	} else if (query.filter) {
		if (!newQuery || newQuery.genre !== false) {
			params.set('genre', query.filter)
		}
	}

	if (newQuery && newQuery.sortBy && newQuery.sortBy !== 'default') {
		params.set('sortBy', newQuery.sortBy)
	} else if (query.sortBy) {
		if (!newQuery || newQuery.sortBy !== 'default') {
			params.set('sortBy', query.sortBy)
		}
	}

	if (newQuery && newQuery.movie) {
		params.set('movie', newQuery.movie)
	} else if (query.movie) {
		if (!newQuery || newQuery.movie !== false) {
			params.set('movie', String(query.movie))
		}
	}

	return params.toString()
}
