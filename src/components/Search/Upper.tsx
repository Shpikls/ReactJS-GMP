import { Logo } from '@components/Logo'
import { Button } from '@styled/Button'
import { Flex } from '@styled/Flex'
import * as React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { addOpen } from '~/redux/appSlice'

export const Upper = (): JSX.Element => {
	const dispatch = useDispatch()

	return (
		<Flex jContent="space-between">
			<Logo />
			<AddButton
				onClick={() => {
					dispatch(addOpen())
				}}
			>
				+ add movie
			</AddButton>
		</Flex>
	)
}

const AddButton = styled(Button)`
	width: 177px;
	height: 46px;
	background: rgba(96, 96, 96, 0.68);
	font-weight: 600;
	font-size: 20px;
	line-height: 24px;
	color: #f65261;
`
