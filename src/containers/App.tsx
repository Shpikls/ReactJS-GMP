import { Spinner } from '@components/Spinner'
import { DeleteContainer } from '@containers/DeleteContainer'
import { EditContainer } from '@containers/EditContainer'
import * as React from 'react'
import { useSelector } from 'react-redux'
import { AppLayout } from '~/components/AppLayout'
import { useGetData } from '~/hooks/useGetData'
import { appSelectors } from '~/redux/appSlice'
import { AddContainer } from './AddContainer'

export const App = (): JSX.Element => {
	const isLoading = useSelector(appSelectors.loading)

	useGetData()

	return (
		<>
			{isLoading && <Spinner />}
			<AddContainer />
			<EditContainer />
			<DeleteContainer />
			<AppLayout />
		</>
	)
}
