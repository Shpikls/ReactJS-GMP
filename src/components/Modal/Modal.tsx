import * as React from 'react'
import styled from 'styled-components'
import modalCloseButton from '~/asserts/modal-close-button.svg'

type PropsModal = {
	isOpen: boolean
	children: JSX.Element | JSX.Element[] | string
	closeModalHandler: () => void
}

export const Modal = ({ isOpen, children, closeModalHandler }: PropsModal): JSX.Element | null => {
	if (isOpen) {
		document.body.classList.add('modal-open')

		return (
			<ModalWrapper>
				<ModalWindow>
					<ModalClose>
						<Img src={modalCloseButton} alt="modal close button" onClick={closeModalHandler} />
					</ModalClose>
					{children}
				</ModalWindow>
			</ModalWrapper>
		)
	}

	document.body.classList.remove('modal-open')

	return null
}

const ModalWrapper = styled.div`
	width: 100%;
	height: 100%;
	position: fixed;
	top: 0;
	left: 0;
	background: rgba(35, 35, 35, 0.9);
	color: white;
	overflow: auto;
`

const ModalWindow = styled.div`
	width: 976px;
	min-height: 200px;
	background: #232323;
	padding: 60px;
	box-sizing: border-box;
	position: relative;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	margin: 16px auto;
	box-shadow: 0 0 2px rgba(0, 0, 0, 0.1), 0 2px 10px rgba(0, 0, 0, 0.07), 0 10px 20px rgba(0, 0, 0, 0.05),
		0 10px 50px rgba(0, 0, 0, 0.05);
`

const ModalClose = styled.button`
	position: absolute;
	top: 30px;
	right: 30px;
	padding: 0;
	background-color: transparent;
	border: none;
`

const Img = styled.img`
	float: left;
`
