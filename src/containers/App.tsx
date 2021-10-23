import { Spinner } from '@components/Spinner'
import * as React from 'react'
import { useSelector } from 'react-redux'
import { AppLayout } from '~/components/AppLayout'
import { useGetData } from '~/hooks/useGetData'
import { appSelectors } from '~/redux/appSlice'

export const App = (): JSX.Element => {
	const isLoading = useSelector(appSelectors.loading)

	useGetData()

	return (
		<>
			{isLoading && <Spinner />}
			<AppLayout />
		</>
	)
}
