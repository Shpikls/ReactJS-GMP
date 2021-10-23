export type SortBy = 'release_date' | 'title' | 'vote_average' | 'runtime' | 'none'

export interface Query {
	search?: string
	searchBy?: string
	filter?: string
	sortBy?: string
	sortOrder?: string
}

export const fetchMovie = async (query?: Query): Promise<any> => {
	const BASE_URL = 'http://localhost:4000/movies'
	const paramString = queryToParamString(query)
	const queryString = paramString ? BASE_URL + paramString : BASE_URL

	const data = await fetch(queryString, {
		method: 'GET',
	})

	return data.json()
}

const queryToParamString = (query?: Query): string => {
	if (!query) {
		return ''
	}

	let result = '?'

	if (query.search) {
		if (result[result.length - 1] !== '?') result += '&'
		if (query.searchBy) {
			result += `searchBy=${query.searchBy}`
		} else {
			result += `searchBy=title`
		}

		result += `&search=${query.search}`
	}

	if (query.filter) {
		if (result[result.length - 1] !== '?') result += '&'
		result += `filter=${query.filter}`
	}

	if (query.sortBy) {
		if (result[result.length - 1] !== '?') result += '&'
		if (query.sortOrder) {
			result += `sortBy=${query.sortBy}&sortOrder=${query.sortOrder}`
		} else {
			result += `sortBy=${query.sortBy}&sortOrder=desc`
		}
	}

	return result
}
