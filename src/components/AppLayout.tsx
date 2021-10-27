import React from 'react'
import { Footer } from './Footer'
import { Main } from './Main/Main'
import { Search } from './Search/Search'

export const AppLayout = (): JSX.Element => (
	<>
		<Search />
		<Main />
		<Footer />
	</>
)
