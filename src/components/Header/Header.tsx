import backgroundImage from '@asserts/header-background.png'
import { Search } from '@components/Header/Search'
import { Upper } from '@components/Header/Upper'
import * as React from 'react'
import styled from 'styled-components'

const Header = (): JSX.Element => {
	return (
		<HeaderWrapper>
			<Upper />
			<Search />
		</HeaderWrapper>
	)
}

const HeaderWrapper = styled.header`
	background: url(${backgroundImage});
	width: 1200px;
	margin: 0 auto 10px;
	padding: 20px 56px;
	box-sizing: border-box;
`

export { Header }
