import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMoviesByQuery } from '~/redux/moviesSlice'
import { querySelectors } from '~/redux/querySlice'

const usePrevious = (value: any) => {
	const ref = useRef()
	useEffect(() => {
		ref.current = value
	})

	return ref.current
}

export const useGetData = (): void => {
	const dispatch = useDispatch()
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
