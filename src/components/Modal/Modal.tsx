import * as React from 'react'
import { useEffect } from 'react'
import styled from 'styled-components'
import modalCloseButton from '~/asserts/modal-close-button.svg'

type PropsModal = {
	isOpen: boolean
	children: JSX.Element | JSX.Element[] | string
	closeModalHandler: () => void
}

export const Modal = ({ isOpen, children, closeModalHandler }: PropsModal): JSX.Element | null => {
	useEffect(() => {
		if (isOpen) {
			document.body.classList.add('modal-open')
		} else {
			document.body.classList.remove('modal-open')
		}
	}, [isOpen])

	useEffect(() => {
		const listener = (event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				closeModalHandler()
			}
		}

		document.addEventListener('keydown', listener)

		return () => {
			document.removeEventListener('keydown', listener)
		}
	}, [])

	if (isOpen) {
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

	return null
}

const ModalWrapper = styled.div`
	width: 100vw;
	height: 100%;
	position: fixed;
	top: 0;
	left: 0;
	background: rgba(35, 35, 35, 0.9);
	color: white;
	overflow-x: hidden;
	overflow-y: auto;
`

const ModalWindow = styled.div`
	width: 976px;
	min-height: 200px;
	background: #232323;
	padding: 60px;
	box-sizing: border-box;
	box-shadow: 0 0 2px rgba(0, 0, 0, 0.1), 0 2px 10px rgba(0, 0, 0, 0.07), 0 10px 20px rgba(0, 0, 0, 0.05),
		0 10px 50px rgba(0, 0, 0, 0.05);

	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
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
