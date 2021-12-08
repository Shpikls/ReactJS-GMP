import { FormikHandlers } from 'formik'
import * as React from 'react'
import styled from 'styled-components'

type PropsGenreCheckbox = {
	isActive: boolean
	value: string
	id: number
	onChangeHandler: FormikHandlers['handleChange']
}

export const GenreCheckbox = ({ isActive, value, id, onChangeHandler }: PropsGenreCheckbox): JSX.Element => {
	return (
		<GenreCheckboxWrapper>
			<CheckBox id={`genre-item-${id}`} name="genres" value={value} onChange={onChangeHandler} checked={isActive} />
			<GenreCheckboxLabel htmlFor={`genre-item-${id}`}>{value}</GenreCheckboxLabel>
		</GenreCheckboxWrapper>
	)
}

const GenreCheckboxLabel = styled.label`
	user-select: none;
	cursor: pointer;
	padding-left: 8px;
	margin-right: 8px;
`

const GenreCheckboxWrapper = styled.div`
	display: flex;
	align-items: center;
`

const CheckBox = styled.input.attrs({ type: 'checkbox' })`
	cursor: pointer;
`
