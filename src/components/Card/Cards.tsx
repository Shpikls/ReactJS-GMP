import { Card } from '@containers/Card'
import * as React from 'react'
import styled from 'styled-components'
import { Item } from '~/types'

type PropsCard = {
	cards: Array<Item>
}

export const Cards = ({ cards }: PropsCard): JSX.Element => {
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
