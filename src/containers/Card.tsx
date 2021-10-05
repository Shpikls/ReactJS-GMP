import { Action, Actions } from '@components/Card/Actions'
import { Description } from '@components/Card/Description'
import { goToDetails } from '@containers/App'
import * as React from 'react'
import { useContext, useState } from 'react'
import styled from 'styled-components'
import { DetailsState } from '~/context'
import { Item } from '~/types'

type PropsItem = {
	card: Item
}

export const Card = ({ card }: PropsItem): JSX.Element => {
	const [showActions, setShowActions] = useState(false)
	const [, dispatchDetailsState] = useContext(DetailsState)

	return (
		<CardWrapper>
			<ImageWrapper>
				<Button
					onClick={() => {
						dispatchDetailsState(goToDetails(card.id))
					}}
				>
					<Img src={card.image} alt={`image-${card.image}`} />
				</Button>
				<Actions action={showActions} actionHandler={setShowActions} />
			</ImageWrapper>
			<Description card={card} />
		</CardWrapper>
	)
}

const ImageWrapper = styled.div`
	position: relative;
`

const Img = styled.img`
	cursor: pointer;
	float: left;
	user-drag: none;
`

const Button = styled.button`
	background: transparent;
	border: none;
	padding: 0;
	position: relative;

	&:focus + ${Action}, &:hover + ${Action} {
		display: block;
	}
`

const CardWrapper = styled.div`
	margin-left: 60px;
	margin-top: 50px;
`
