import { ErrorBoundary } from '@components/ErrorBoundary'
import { Footer } from '@components/Footer'
import { Header } from '@components/Header/Header'
import { Main } from '@components/Main/Main'
import * as React from 'react'
import { getCards } from '~/data/data'

export const App = (): JSX.Element => {
	const cards = getCards()

	return (
		<>
			<ErrorBoundary data={cards}>
				<Header />
				<Main data={cards} />
				<Footer />
			</ErrorBoundary>
		</>
	)
}
