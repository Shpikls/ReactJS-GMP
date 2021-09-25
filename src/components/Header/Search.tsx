import { Button } from '@styled/Button'
import { Flex } from '@styled/Flex'
import { InputText } from '@styled/Input'
import * as React from 'react'
import styled from 'styled-components'

export const Search = (): JSX.Element => {
	return (
		<SearchWrapper>
			<SearchTitle>FIND YOUR MOViE</SearchTitle>
			<Flex jContent="space-between">
				<InputText placeholder="What do you want to watch?" />
				<SearchButton>Search</SearchButton>
			</Flex>
		</SearchWrapper>
	)
}

const SearchButton = styled(Button)`
	width: 233px;
	height: 57px;
	font-weight: 500;
	font-size: 20px;
	line-height: 24px;
	background: #f65261;
	color: #ffffff;
`

const SearchWrapper = styled.div`
	margin: 36px 60px 130px;
`

const SearchTitle = styled.h2`
	font-style: normal;
	font-weight: 300;
	font-size: 40px;
	line-height: 49px;
	text-transform: uppercase;
	color: #ffffff;
	margin: 0 0 36px;
`
