import backgroundImage from '@asserts/header-background.png'
import { SearchBar } from '@components/Search/SearchBar'
import { Upper } from '@components/Search/Upper'
import * as React from 'react'
import styled from 'styled-components'

export const Search = (): JSX.Element => {
	return (
		<SearchWrapper>
			<Upper />
			<SearchBar />
		</SearchWrapper>
	)
}

const SearchWrapper = styled.section`
	background: url(${backgroundImage});
	width: 1200px;
	margin: 0 auto 10px;
	padding: 20px 56px;
	box-sizing: border-box;
`
