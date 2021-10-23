import { Flex } from '@styled/Flex'
import * as React from 'react'
import styled from 'styled-components'
import { Genre } from '~/containers/Genre'
import { Sort } from './Sort'

export const ToolBar = (): JSX.Element => (
	<FlexContainer jContent="space-between">
		<Genre />
		<Sort />
	</FlexContainer>
)

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
