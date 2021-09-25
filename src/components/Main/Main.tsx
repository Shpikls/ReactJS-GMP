import { ToolBar } from '@components/Main/ToolBar'
import * as React from 'react'
import styled from 'styled-components'
import { Item } from '~/types'
import { SearchResult } from './SearchResult'

type PropsMain = {
	data: Array<Item>
}

export const Main = ({ data }: PropsMain): JSX.Element => {
	return (
		<MainWrapper>
			<ToolBar data={data} />
			<SearchResult data={data} />
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
