import { render } from '@testing-library/react'
import React from 'react'
import { Spinner } from './Spinner'

describe('Testing Spinner.tsx', () => {
	test('To mach snapshot', () => {
		const { asFragment } = render(<Spinner />)
		expect(asFragment).toMatchSnapshot()
	})
})
