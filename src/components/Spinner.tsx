import React from 'react'
import { Spinner as SpinnerBootstrap } from 'react-bootstrap'
import styled from 'styled-components'

export const Spinner = (): JSX.Element => {
	return (
		<Center>
			<LoadingText>Loading...</LoadingText>
			<SpinnerBootstrap animation="border" variant="danger" />
		</Center>
	)
}

const LoadingText = styled.div`
	margin-bottom: 16px;
`

const Center = styled.div`
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`
