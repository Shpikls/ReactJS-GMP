import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setGenre } from '~/redux/genreSlice'
import { getMoviesByQuery, moviesSelectors } from '~/redux/moviesSlice'
import { querySelectors } from '~/redux/querySlice'

export const useGetData = (): void => {
	const dispatch = useDispatch()
	const query = useSelector(querySelectors.all)
	const movies = useSelector(moviesSelectors.all)
	const [trigger, setTrigger] = useState(false)

	useEffect(() => {
		setTrigger(true)
	}, [query.search])

	useEffect(() => {
		dispatch(getMoviesByQuery(query, false))
	}, [query])

	useEffect(() => {
		if (trigger) {
			dispatch(setGenre(movies.totalGenres))
		}

		setTrigger(false)
	}, [movies.totalGenres])
}
