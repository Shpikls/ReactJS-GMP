import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getMoviesByQuery } from '~/redux/moviesSlice'

export const useGetData = (): void => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getMoviesByQuery(undefined, true))
	}, [])
}
