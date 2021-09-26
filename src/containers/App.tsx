import { AddMovie } from '@components/AddMovie/AddMovie'
import { DeleteMovie } from '@components/DeleteMovie/DeleteMovie'
import { EditMovie } from '@components/EditMovie/EditMovie'
import { Footer } from '@components/Footer'
import { Header } from '@components/Header/Header'
import { Main } from '@components/Main/Main'
import { Modal } from '@components/Modal/Modal'
import { ErrorBoundary } from '@containers/ErrorBoundary'
import * as React from 'react'
import { useState } from 'react'
import { ModalContext } from '~/context'
import { getCards } from '~/data/data'
import { IModalState } from '~/types'

const cards = getCards()

const AppComponent = (): JSX.Element => {
	const [modalState, setModalState] = useState<IModalState>({
		addModal: false,
		editMovie: false,
		deleteMovie: false,
	})

	const handleCloseAddModal = () => {
		setModalState((prevState) => {
			return {
				...prevState,
				...{ addModal: false },
			}
		})
	}

	const handleCloseEditModal = () => {
		setModalState((prevState) => {
			return {
				...prevState,
				...{ editMovie: false },
			}
		})
	}

	const handleCloseDeleteModal = () => {
		setModalState((prevState) => {
			return {
				...prevState,
				...{ deleteMovie: false },
			}
		})
	}

	return (
		<>
			<ModalContext.Provider value={[modalState, setModalState]}>
				<Header />
				{/*@ts-ignore*/}
				<Main data={cards} />
				<Footer />
				<Modal isOpen={modalState.addModal} closeModalHandler={handleCloseAddModal}>
					<AddMovie />
				</Modal>
				<Modal isOpen={modalState.editMovie} closeModalHandler={handleCloseEditModal}>
					<EditMovie />
				</Modal>
				<Modal isOpen={modalState.deleteMovie} closeModalHandler={handleCloseDeleteModal}>
					<DeleteMovie />
				</Modal>
			</ModalContext.Provider>
		</>
	)
}

export const App = ErrorBoundary(AppComponent, cards)
