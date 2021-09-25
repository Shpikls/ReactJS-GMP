import { Cards } from '@components/Card/Cards'
import * as React from 'react'
import { Item } from 'src/types'
import styled from 'styled-components'

type SearchResultProps = {
	data: Array<Item>
}

export const SearchResult = ({ data }: SearchResultProps): JSX.Element => {
	return (
		<>
			<Found>{data.length.toString()} movies found</Found>
			<Cards cards={data} />
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
