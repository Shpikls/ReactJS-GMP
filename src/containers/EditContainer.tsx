import { EditMovie } from '@components/EditMovie/EditMovie'
import { Modal } from '@components/Modal/Modal'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeModal } from '~/redux/appSlice'
import { RootStore } from '~/redux/store'

export const EditContainer = () => {
	const modal = useSelector((state: RootStore) => state.app.modal)
	const dispatch = useDispatch()

	return (
		<Modal
			isOpen={modal === 'edit'}
			closeModalHandler={() => {
				dispatch(closeModal())
			}}
		>
			<EditMovie />
		</Modal>
	)
}
