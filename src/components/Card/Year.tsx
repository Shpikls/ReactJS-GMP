import * as React from 'react'
import styled from 'styled-components'

type PropsYear = {
	year: string
}

export const Year = ({ year }: PropsYear): JSX.Element => {
	return <YearStyled>{year}</YearStyled>
}

const YearStyled = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	font-family: Montserrat, sans-serif;
	font-style: normal;
	font-weight: 500;
	font-size: 14px;
	line-height: 17px;
	text-align: center;
	color: #ffffff;
	opacity: 0.7;
	padding: 4px 12px;
	border: 1px solid #979797;
	box-sizing: border-box;
	border-radius: 4px;
`
