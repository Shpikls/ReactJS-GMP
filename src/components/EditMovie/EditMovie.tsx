import { EditForm } from '@components/EditForm/EditForm'
import * as React from 'react'
import styled from 'styled-components'

export const EditMovie = (): JSX.Element => {
	return (
		<>
			<Title>EDIT MOVIE</Title>
			<EditForm />
		</>
	)
}

const Title = styled.h3`
	padding: 0;
	margin: 0 0 40px 0;
	font-weight: 300;
	font-size: 40px;
	line-height: 49px;
	text-transform: uppercase;
	color: #ffffff;
`
