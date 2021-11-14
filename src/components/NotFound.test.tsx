import { render } from '@testing-library/react'
import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { NotFound } from './NotFound'

describe('Testing NotFound.tsx', () => {
	const { asFragment } = render(
		<MemoryRouter>
			<NotFound />
		</MemoryRouter>,
	)

	test('To mach snapshot', () => {
		expect(asFragment).toMatchSnapshot()
	})
})
