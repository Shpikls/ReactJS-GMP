import * as React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { Card } from '~/containers/Card'
import { moviesSelectors } from '~/redux/moviesSlice'
import { Item } from '~/types'

export const Cards = (): JSX.Element => {
	const cards = useSelector(moviesSelectors.data)

	return (
		<Flex>
			{cards.map(
				(item: Item): JSX.Element => (
					<Card key={item.id} card={item} />
				),
			)}
		</Flex>
	)
}

const Flex = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin-left: -60px;
	margin-top: -50px;
	margin-bottom: 50px;
`
