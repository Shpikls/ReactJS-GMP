import { Button } from '@styled/Button'
import { Flex } from '@styled/Flex'
import { InputText } from '@styled/Input'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { queryStateToAppUrl } from '~/helpers/queryStateToAppUrl'
import { querySelectors } from '~/redux/querySlice'
import { RootStore } from '~/redux/store'

export const SearchBar = (): JSX.Element => {
	const search = useSelector((state: RootStore) => state.query.search)
	const [input, setInput] = useState('')
	const navigate = useNavigate()
	const query = useSelector(querySelectors.all)

	const handleSubmit = (): void => {
		const navigateURL = queryStateToAppUrl(query, { search: input })
		navigate(`?${navigateURL}`, { replace: true })
	}

	useEffect(() => {
		if (search) setInput(search)
	}, [search])

	return (
		<SearchWrapper>
			<SearchTitle>FIND YOUR MOViE</SearchTitle>
			<Flex jContent="space-between">
				<InputText
					value={input}
					onChange={(e) => setInput(e.target.value)}
					placeholder="What do you want to watch?"
					onKeyDown={(e) => {
						if (e.key === 'Enter') {
							handleSubmit()
						}
					}}
				/>
				<SearchButton
					onClick={() => {
						handleSubmit()
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
