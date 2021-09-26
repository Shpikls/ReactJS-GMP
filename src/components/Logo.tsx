import * as React from 'react'
import styled from 'styled-components'

export const Logo = (): JSX.Element => {
	return (
		<LogoStyled>
			<span>netflix</span>roulette
		</LogoStyled>
	)
}

const LogoStyled = styled.span`
	font-family: Montserrat, sans-serif;
	font-style: normal;
	font-weight: normal;
	font-size: 20px;
	line-height: 24px;
	color: #f65261;

	span {
		font-weight: 900;
	}
`
