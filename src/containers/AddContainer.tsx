import { AddMovie } from '@components/AddMovie/AddMovie'
import { Modal } from '@components/Modal/Modal'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeModal } from '~/redux/appSlice'
import { RootStore } from '~/redux/store'

export const AddContainer = () => {
	const modal = useSelector((state: RootStore) => state.app.modal)
	const dispatch = useDispatch()

	return (
		<Modal
			isOpen={modal === 'add'}
			closeModalHandler={() => {
				dispatch(closeModal())
			}}
		>
			<AddMovie />
		</Modal>
	)
}
