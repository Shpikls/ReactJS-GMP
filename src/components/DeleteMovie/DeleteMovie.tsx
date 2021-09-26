import * as React from 'react'
import styled from 'styled-components'

export const DeleteMovie = (): JSX.Element => {
	return (
		<>
			<Title>Delete MOVIE</Title>
			<Description>Are you sure you want to delete this movie?</Description>
			<Button>confirm</Button>
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

const Description = styled.p`
	font-weight: normal;
	font-size: 20px;
	line-height: 24px;
	padding: 0;
	margin-bottom: 52px;

	color: #ffffff;
`

const Button = styled.button`
	font-family: Montserrat, sans-serif;
	font-style: normal;
	font-weight: 500;
	font-size: 20px;
	line-height: 24px;
	box-sizing: border-box;
	border: 1px solid #f65261;
	border-radius: 5px;
	padding: 0;
	width: 180px;
	height: 56px;
	text-transform: uppercase;
	background-color: #f65261;
	color: white;
	margin-left: auto;
	margin-right: 0;
	display: block;
`
