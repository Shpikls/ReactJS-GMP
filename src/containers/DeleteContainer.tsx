import { DeleteMovie } from '@components/DeleteMovie/DeleteMovie'
import { Modal } from '@components/Modal/Modal'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeModal } from '~/redux/appSlice'
import { RootStore } from '~/redux/store'

export const DeleteContainer = (): JSX.Element => {
	const modal = useSelector((state: RootStore) => state.app.modal)
	const dispatch = useDispatch()

	return (
		<Modal
			isOpen={modal === 'delete'}
			closeModalHandler={() => {
				dispatch(closeModal())
			}}
		>
			<DeleteMovie />
		</Modal>
	)
}
