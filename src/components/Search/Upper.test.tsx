import React from 'react'
import { render } from '~/test/test-utils'
import { Upper } from './Upper'

describe('Test Upper.tsx', () => {
	test('To match snapshot', () => {
		const { asFragment } = render(<Upper />)

		expect(asFragment()).toMatchSnapshot()
	})
})
