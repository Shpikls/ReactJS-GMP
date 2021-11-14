import { render } from '@testing-library/react'
import React from 'react'
import { Button } from './Button'
import { Flex } from './Flex'
import { InputText } from './Input'

describe('Test styled components', () => {
	test('Button to mach snapshot', () => {
		const { asFragment } = render(<Button />)
		expect(asFragment()).toMatchSnapshot()
	})

	test('Flex to mach snapshot', () => {
		const { asFragment } = render(<Flex jContent="space-between" fDirection="column" />)
		expect(asFragment()).toMatchSnapshot()
	})

	test('Input to mach snapshot', () => {
		const { asFragment } = render(<InputText />)
		expect(asFragment()).toMatchSnapshot()
	})
})
