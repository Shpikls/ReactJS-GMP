import { Details } from '@components/Details'
import React from 'react'
import { useSelector } from 'react-redux'
import { RootStore } from '~/redux/store'
import { Footer } from './Footer'
import { Main } from './Main/Main'
import { Search } from './Search/Search'

export const AppLayout = (): JSX.Element => {
	const movie = useSelector((store: RootStore) => store.query.movie)
	return (
		<>
			{movie ? <Details id={movie} /> : <Search />}
			<Main />
			<Footer />
		</>
	)
}
