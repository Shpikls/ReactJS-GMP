import { Logo } from '@components/Logo'
import { Button } from '@styled/Button'
import { Flex } from '@styled/Flex'
import * as React from 'react'
import { useContext } from 'react'
import styled from 'styled-components'
import { ModalContext } from '~/context'

export const Upper = (): JSX.Element => {
	const [, setModalState] = useContext(ModalContext)

	const handleOpenAddModal = () => {
		setModalState((prevState) => {
			return {
				...prevState,
				...{ addModal: true },
			}
		})
	}

	return (
		<Flex jContent="space-between">
			<Logo />
			<AddButton onClick={handleOpenAddModal}>+ add movie</AddButton>
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
