import { Button } from '@styled/Button'
import { Flex } from '@styled/Flex'
import { InputText } from '@styled/Input'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { movieSearch } from '~/redux/querySlice'

export const SearchBar = (): JSX.Element => {
	const [input, setInput] = useState('')
	const dispatch = useDispatch()

	return (
		<SearchWrapper>
			<SearchTitle>FIND YOUR MOViE</SearchTitle>
			<Flex jContent="space-between">
				<InputText value={input} onChange={(e) => setInput(e.target.value)} placeholder="What do you want to watch?" />
				<SearchButton
					onClick={() => {
						dispatch(movieSearch(input, true))
					}}
				>
					Search
				</SearchButton>
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
