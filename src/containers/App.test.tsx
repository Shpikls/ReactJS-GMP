import '@testing-library/jest-dom/extend-expect'
import { fireEvent } from '@testing-library/react'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import 'whatwg-fetch'
import { render, screen } from '~/test/test-utils'
import { App } from './App'

const body = {
	data: [
		{
			title: 'La La Land',
			tagline: "Here's to the fools who dream.",
			vote_average: 7.9,
			vote_count: 6782,
			release_date: '2016-12-29',
			poster_path: 'https://image.tmdb.org/t/p/w500/ylXCdC106IKiarftHkcacasaAcb.jpg',
			overview:
				'Mia, an aspiring actress, serves lattes to movie stars in between auditions and Sebastian, a jazz musician, scrapes by playing cocktail party gigs in dingy bars, but as success mounts they are faced with decisions that begin to fray the fragile fabric of their love affair, and the dreams they worked so hard to maintain in each other threaten to rip them apart.',
			budget: 30000000,
			revenue: 445435700,
			runtime: 128,
			genres: ['Comedy', 'Drama', 'Romance'],
			id: 313369,
		},
	],
	total: 0,
	offset: 0,
	limit: 0,
	totalGenres: ['Comedy', 'Drama', 'Romance'],
}

const movieIDBody = {
	title: 'La La Land',
	tagline: "Here's to the fools who dream.",
	vote_average: 7.9,
	vote_count: 6782,
	release_date: '2016-12-29',
	poster_path: 'https://image.tmdb.org/t/p/w500/ylXCdC106IKiarftHkcacasaAcb.jpg',
	overview:
		'Mia, an aspiring actress, serves lattes to movie stars in between auditions and Sebastian, a jazz musician, scrapes by playing cocktail party gigs in dingy bars, but as success mounts they are faced with decisions that begin to fray the fragile fabric of their love affair, and the dreams they worked so hard to maintain in each other threaten to rip them apart.',
	budget: 30000000,
	revenue: 445435700,
	runtime: 128,
	genres: ['Comedy', 'Drama', 'Romance'],
	id: 313369,
}

const handlers = [
	rest.get('http://localhost:4000/movies', (req, res, ctx) => {
		return res(ctx.json(body))
	}),
	rest.get('http://localhost:4000/movies/313369', (req, res, ctx) => {
		return res(ctx.json(movieIDBody))
	}),
	rest.get('http://localhost:4000/genres', (req, res, ctx) => {
		return res(ctx.json(['Comedy', 'Drama', 'Romance']))
	}),
]

const server = setupServer(...handlers)

beforeAll(() => server.listen())

afterAll(() => server.close())

describe('Test App.tsx', () => {
	test('To match snapshot', async () => {
		const { asFragment } = await render(
			<MemoryRouter>
				<App />
			</MemoryRouter>,
		)

		expect(await screen.findByText(/La La Land/i)).toBeInTheDocument()
		expect(asFragment()).toMatchSnapshot()
	})

	test('Details opened', async () => {
		window.scroll = jest.fn()

		const { asFragment } = await render(
			<MemoryRouter initialEntries={['/search?movie=313369']}>
				<App />
			</MemoryRouter>,
		)

		expect(
			await screen.findByText(
				/Mia, an aspiring actress, serves lattes to movie stars in between auditions and Sebastian, a jazz musician/i,
			),
		).toBeInTheDocument()

		expect(asFragment()).toMatchSnapshot()
	})

	test('open AddMovie modal', async () => {
		const { asFragment } = await render(
			<MemoryRouter>
				<App />
			</MemoryRouter>,
		)

		expect(await screen.findByText(/La La Land/i)).toBeInTheDocument()

		fireEvent.click(screen.getByText(/add movie/i))

		expect(asFragment()).toMatchSnapshot()
	})

	test('open EditMovie modal', async () => {
		const { asFragment } = await render(
			<MemoryRouter>
				<App />
			</MemoryRouter>,
		)

		expect(await screen.findByText(/La La Land/i)).toBeInTheDocument()

		fireEvent.click(screen.getByText(/Edit/i))

		expect(
			await screen.findByText(
				/Mia, an aspiring actress, serves lattes to movie stars in between auditions and Sebastian, a jazz musician/i,
			),
		).toBeInTheDocument()

		expect(asFragment()).toMatchSnapshot()

		fireEvent.click(screen.getByText(/submit/i))

		expect(asFragment()).toMatchSnapshot()
	})

	test('open DeleteMovie modal', async () => {
		const { asFragment } = await render(
			<MemoryRouter>
				<App />
			</MemoryRouter>,
		)

		expect(await screen.findByText(/La La Land/i)).toBeInTheDocument()

		fireEvent.click(screen.getByText(/Delete/i))

		expect(await screen.findByText(/confirm/i)).toBeInTheDocument()

		expect(asFragment()).toMatchSnapshot()

		fireEvent.click(screen.getByText(/confirm/i))

		expect(asFragment()).toMatchSnapshot()
	})
})
