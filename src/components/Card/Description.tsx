import * as React from 'react'
import styled from 'styled-components'
import { Item } from '~/types'
import { Year } from './Year'

type PropsItem = {
	card: Item
}

export const Description = ({ card }: PropsItem): JSX.Element => {
	return (
		<DescriptionWrapper>
			<TitleCard>{card.name}</TitleCard>
			<DescriptionStyled>
				{card.feature || card.genre.reduce((accumulator, genre) => `${accumulator}, ${genre}`)}
			</DescriptionStyled>
			<Year year={card.year} />
		</DescriptionWrapper>
	)
}

const DescriptionStyled = styled.div`
	font-family: Montserrat, sans-serif;
	font-style: normal;
	font-weight: 500;
	font-size: 14px;
	line-height: 17px;
	color: #ffffff;
	opacity: 0.5;
	margin-top: 8px;
`

const TitleCard = styled.button`
	font-family: Montserrat, sans-serif;
	font-style: normal;
	font-weight: 500;
	font-size: 18px;
	line-height: 26px;
	color: #ffffff;
	opacity: 0.7;
	background-color: transparent;
	border: none;
	padding: 0;
`

const DescriptionWrapper = styled.div`
	position: relative;
	margin-top: 20px;
`
