import { render } from '@testing-library/react'
import React from 'react'
import { Year } from './Year'

describe('Testing Year.tsx', () => {
	test('To match snapshot', () => {
		const { asFragment } = render(<Year year="9889" />)

		expect(asFragment()).toMatchSnapshot()
	})

	test('To null returned', () => {
		const { container } = render(<Year />)
		const div = container.querySelector('div')
		expect(div).toBe(null)
	})
})
