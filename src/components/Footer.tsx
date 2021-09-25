import * as React from 'react'
import styled from 'styled-components'
import { Logo } from './Logo'

const Footer = (): JSX.Element => {
	return (
		<FooterWrapper>
			<Logo />
		</FooterWrapper>
	)
}

export { Footer }

const FooterWrapper = styled.footer`
	background: #424242;
	width: 1200px;
	margin: 0 auto;
	padding: 20px 56px;
	box-sizing: border-box;
	color: #ffffff;
	display: flex;
	justify-content: center;
`
