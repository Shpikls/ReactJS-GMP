import { Genre } from '@containers/Genre'
import { Flex } from '@styled/Flex'
import * as React from 'react'
import styled from 'styled-components'
import { getGenre } from '~/helpers/getGenre'
import { Item } from '~/types'
import { Sort } from './Sort'

type PropsToolBar = {
	data: Array<Item>
}

export const ToolBar = ({ data }: PropsToolBar): JSX.Element => {
	const genre = getGenre(data)

	return (
		<FlexContainer jContent="space-between">
			<Genre genre={genre} />
			<Sort />
		</FlexContainer>
	)
}

const FlexContainer = styled(Flex)`
	border-bottom: 4px solid #424242;
	box-sizing: border-box;
	font-weight: 500;
	font-size: 16px;
	line-height: 20px;
	text-transform: uppercase;
	color: #ffffff;
	padding: 20px 0;
`
