import { FormValues } from '@components/EditForm/EditForm'
import { Flex } from '@styled/Flex'
import { useFormikContext } from 'formik'
import * as React from 'react'
import styled from 'styled-components'

type PropsFieldForm = {
	id: keyof FormValues
	title: string
	placeholder?: string
}

export const FieldForm = ({ id, placeholder, title }: PropsFieldForm): JSX.Element => {
	const { handleChange, handleBlur, errors, values } = useFormikContext<FormValues>()

	return (
		<FieldColumn fDirection="column">
			<Label htmlFor={id}>{title}</Label>
			<Input placeholder={placeholder} id={id} value={values[id]} onChange={handleChange} onBlur={handleBlur} />
			{errors[id] && <Error>{errors[id]}</Error>}
		</FieldColumn>
	)
}

export const FieldColumn = styled(Flex)`
	position: relative;

	&:nth-child(odd) {
		flex: 0 1 525px;
		margin-right: 30px;
	}

	&:nth-child(even) {
		flex: 1 0 auto;
	}

	margin-bottom: 30px;
`

export const Label = styled.label`
	font-weight: 600;
	font-size: 16px;
	line-height: 20px;
	text-transform: uppercase;
	letter-spacing: 0.8px;
	color: #f65261;
	margin-bottom: 12px;
`

export const Input = styled.input.attrs({ type: 'text' })`
	background-color: rgba(50, 50, 50, 0.8);
	height: 56px;
	font-family: Montserrat, sans-serif;
	font-style: normal;
	font-weight: normal;
	font-size: 20px;
	line-height: 24px;
	color: #ffffff;
	border: none;
	width: 100%;
	border-radius: 5px;
	box-sizing: border-box;
	padding: 0 18px;
`

export const Error = styled.div`
	position: absolute;
	color: indianred;
	top: calc(100% + 2px);
	left: 16px;
	font-family: Montserrat, sans-serif;
	font-style: normal;
	font-weight: normal;
	font-size: 10px;
	line-height: 12px;
`
