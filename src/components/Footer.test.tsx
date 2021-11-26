import { render } from '@testing-library/react'
import React from 'react'
import { Footer } from './Footer'

describe('Testing Footer.tsx', () => {
	test('To mach snapshot', () => {
		const { asFragment } = render(<Footer />)
		expect(asFragment()).toMatchSnapshot()
	})
})
