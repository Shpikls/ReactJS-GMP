import * as React from 'react'
import styled from 'styled-components'
import { SearchResult } from './SearchResult'
import { ToolBar } from './ToolBar'

export const Main = (): JSX.Element => {
	return (
		<MainWrapper>
			<ToolBar />
			<SearchResult />
		</MainWrapper>
	)
}

const MainWrapper = styled.section`
	background: #232323;
	width: 1200px;
	margin: 0 auto;
	padding: 0 56px 20px;
	box-sizing: border-box;
	color: #ffffff;
`
