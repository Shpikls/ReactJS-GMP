import actionButton from '@asserts/action-button.svg'
import closeActionButton from '@asserts/close-action-button.svg'
import { Button } from '@styled/Button'
import * as React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { deleteOpen, editOpen } from '~/redux/appSlice'

type PropsAction = {
	action: boolean
	actionHandler: React.Dispatch<React.SetStateAction<boolean>>
	cardId: number
}

type PropsActions = {
	show: boolean
}

export const Actions = ({ action, actionHandler, cardId }: PropsAction): JSX.Element => {
	const dispatch = useDispatch()

	return (
		<>
			<Action onClick={() => actionHandler(true)} show={!action}>
				<img src={actionButton} alt="action-button" />
			</Action>
			<ActionsDetails show={action}>
				<CloseActionButton onClick={() => actionHandler(false)}>
					<img src={closeActionButton} alt="close-action" />
				</CloseActionButton>
				<ActionButton onClick={() => dispatch(editOpen(cardId))}>Edit</ActionButton>
				<ActionButton onClick={() => dispatch(deleteOpen(cardId))}>Delete</ActionButton>
			</ActionsDetails>
		</>
	)
}

const ActionButton = styled(Button)`
	font-size: 16px;
	line-height: 20px;
	color: #ffffff;
	opacity: 0.8;
	background-color: transparent;
	padding: 8px 0 8px 24px;
	box-sizing: border-box;
	text-align: left;
	width: 100%;
	display: block;
	border-radius: 0;

	&:hover {
		background-color: #f65261;
	}
`

const CloseActionButton = styled.button`
	background-color: transparent;
	padding: 0;
	border: none;
	position: absolute;
	top: 6px;
	right: 10px;

	img {
		float: left;
	}
`

const ActionsDetails = styled.div`
	background: rgb(35, 35, 35);
	border-radius: 4px;
	position: absolute;
	top: 16px;
	right: 16px;
	width: 190px;
	padding: 24px 0 12px;
	cursor: default;
	display: ${({ show }: PropsActions) => (show ? 'block' : 'none')};
`

export const Action = styled.button`
	top: 16px;
	right: 16px;
	position: absolute;
	width: 36px;
	height: 36px;
	border: none;
	padding: 0;
	background-color: transparent;
	display: none;

	&:hover,
	&:focus {
		display: ${({ show }: PropsActions) => (show ? 'block' : 'none')};
	}
`
