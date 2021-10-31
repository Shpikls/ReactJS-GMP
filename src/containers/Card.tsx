import { Action, Actions } from '@components/Card/Actions'
import { Description } from '@components/Card/Description'
import * as React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import errorPoster from '~/asserts/notfound.png'
import { Item } from '~/types'

type PropsItem = {
	card: Item
}

export const Card = ({ card }: PropsItem): JSX.Element => {
	const [showActions, setShowActions] = useState(false)
	const [error, setError] = useState(false)

	return (
		<CardWrapper>
			<ImageWrapper>
				<Button>
					<Img
						onError={(): void => {
							setError(true)
						}}
						src={error ? errorPoster : card.poster_path}
						alt={`Poster film: ${card.title}`}
					/>
				</Button>
				<Actions action={showActions} actionHandler={setShowActions} cardId={card.id} />
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
	width: 322px;
	height: 483px;
	object-fit: cover;
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
