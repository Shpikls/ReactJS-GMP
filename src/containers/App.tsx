import { AddMovie } from '@components/AddMovie/AddMovie'
import { DeleteMovie } from '@components/DeleteMovie/DeleteMovie'
import { EditMovie } from '@components/EditMovie/EditMovie'
import { Footer } from '@components/Footer'
import { Header } from '@components/Header/Header'
import { Main } from '@components/Main/Main'
import { Modal } from '@components/Modal/Modal'
import * as React from 'react'
import { useReducer, useState } from 'react'
import { Details } from '~/components/Details/Details'
import { DetailsState, ModalContext, SortContext } from '~/context'
import { getCards } from '~/data/data'
import { IModalState, Item, Sort } from '~/types'

interface IAction {
	type: string
	id: number | null
}

const SHOW_DETAILS = '@SHOW_DETAILS'

interface IState {
	details: number | null
}

export const goToDetails = (id: number): IAction => ({
	type: SHOW_DETAILS,
	id: id,
})

export const goToSearch = (): IAction => ({
	type: SHOW_DETAILS,
	id: null,
})

const rootReducer = (state: IState, action: IAction): IState => {
	switch (action.type) {
		case SHOW_DETAILS:
			return {
				...state,
				details: action.id,
			}
		default:
			return state
	}
}

const initialState: IState = {
	details: null,
}

export const App = (): JSX.Element => {
	const [modalState, setModalState] = useState<IModalState>({
		addModal: false,
		editMovie: false,
		deleteMovie: false,
	})
	const [sort, setSort] = useState<Sort>()
	const [data] = useState<Item[]>(getCards(sort))
	const [state, dispatch] = useReducer(rootReducer, initialState)

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
			<DetailsState.Provider value={[state, dispatch]}>
				<SortContext.Provider value={[sort, setSort]}>
					<ModalContext.Provider value={[modalState, setModalState]}>
						{state.details ? <Details data={data} /> : <Header />}
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
			</DetailsState.Provider>
		</>
	)
}
