import { AddMovie } from '@components/AddMovie/AddMovie'
import { DeleteMovie } from '@components/DeleteMovie/DeleteMovie'
import { EditMovie } from '@components/EditMovie/EditMovie'
import { Footer } from '@components/Footer'
import { Header } from '@components/Header/Header'
import { Main } from '@components/Main/Main'
import { Modal } from '@components/Modal/Modal'
import * as React from 'react'
import { useState } from 'react'
import { ModalContext, SortContext } from '~/context'
import { getCards } from '~/data/data'
import { IModalState, Item, Sort } from '~/types'

export const App = (): JSX.Element => {
	const [modalState, setModalState] = useState<IModalState>({
		addModal: false,
		editMovie: false,
		deleteMovie: false,
	})
	const [sort, setSort] = useState<Sort>()
	const [data] = useState<Item[]>(getCards(sort))

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
			<SortContext.Provider value={[sort, setSort]}>
				<ModalContext.Provider value={[modalState, setModalState]}>
					<Header />
					<Main data={data} />
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
			</SortContext.Provider>
		</>
	)
}
