import * as React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { moviesSelectors } from '~/redux/moviesSlice'
import { Cards } from '../Card/Cards'

export const SearchResult = (): JSX.Element => {
	const totalFound = useSelector(moviesSelectors.totalFound)

	return (
		<>
			<Found>{totalFound} movies found</Found>
			<Cards />
		</>
	)
}

const Found = styled.div`
	font-weight: 600;
	font-size: 20px;
	line-height: 24px;
	color: #ffffff;
	margin-top: 24px;
	margin-bottom: 28px;
`
