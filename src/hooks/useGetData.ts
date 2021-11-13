import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { getMoviesByQuery } from '~/redux/moviesSlice'
import {
	clearMovie,
	clearSearch,
	clearSort,
	querySelectors,
	setGenre,
	setMovie,
	setSearch,
	setSort,
} from '~/redux/querySlice'

const usePrevious = (value: any) => {
	const ref = useRef()
	useEffect(() => {
		ref.current = value
	})

	return ref.current
}

export const useGetData = (): void => {
	const dispatch = useDispatch()
	const location = useLocation()

	const searchParams = new URLSearchParams(location.search)

	if (searchParams.has('search')) {
		const search = searchParams.get('search')

		if (search) {
			useEffect(() => {
				dispatch(setSearch(search))
			}, [search])
		} else {
			useEffect(() => {
				dispatch(clearSearch())
			}, [search])
		}
	} else {
		useEffect(() => {
			dispatch(clearSearch())
		}, [searchParams.has('search')])
	}

	if (searchParams.has('genre')) {
		const genre = searchParams.get('genre')

		if (genre) {
			useEffect(() => {
				dispatch(setGenre(genre))
			}, [genre])
		} else {
			useEffect(() => {
				dispatch(setGenre())
			}, [genre])
		}
	} else {
		useEffect(() => {
			dispatch(setGenre())
		}, [searchParams.has('genre')])
	}

	if (searchParams.has('sortBy')) {
		const sortBy = searchParams.get('sortBy')

		useEffect(() => {
			if (sortBy) {
				dispatch(setSort({ sortBy, sortOrder: 'desc' }))
			} else {
				dispatch(clearSort())
			}
		}, [sortBy])
	} else {
		useEffect(() => {
			dispatch(clearSort())
		}, [searchParams.has('sortBy')])
	}

	if (searchParams.has('movie')) {
		const movie = searchParams.get('movie')

		useEffect(() => {
			if (movie) {
				dispatch(setMovie(Number(movie)))
			} else {
				dispatch(clearMovie())
			}
		}, [movie])
	} else {
		useEffect(() => {
			dispatch(clearMovie())
		}, [searchParams.has('movie')])
	}

	const query = useSelector(querySelectors.all)
	const { search } = query
	const prevSearch = usePrevious(search)

	useEffect(() => {
		dispatch(getMoviesByQuery(query, true))
	}, [])

	useEffect(() => {
		dispatch(getMoviesByQuery(query, search !== prevSearch))
	}, [query])
}
