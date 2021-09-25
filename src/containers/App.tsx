import { Footer } from '@components/Footer'
import { Header } from '@components/Header/Header'
import { Main } from '@components/Main/Main'
import { ErrorBoundary } from '@containers/ErrorBoundary'
import * as React from 'react'
import { getCards } from '~/data/data'

const cards = getCards()

const AppComponent = (): JSX.Element | null => {
	return (
		<>
			<Header />
			{/*@ts-ignore*/}
			<Main data={cards} />
			<Footer />
		</>
	)
}

export const App = ErrorBoundary(AppComponent, cards)
