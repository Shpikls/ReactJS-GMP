import { Flex } from '@styled/Flex'
import * as React from 'react'
import styled from 'styled-components'

export const EditForm = (): JSX.Element => {
	return (
		<>
			<Flex jContent="space-between">
				<FieldColumn fDirection="column">
					<Label htmlFor="add-movie-title">TITLE</Label>
					<Input placeholder="Movie Name" id="add-movie-title" />
				</FieldColumn>
				<FieldColumn fDirection="column">
					<Label htmlFor="add-movie-release-date">RELEASE DATE</Label>
					<Input placeholder="Select Date" id="add-movie-release-date" />
				</FieldColumn>
			</Flex>
			<Flex jContent="space-between">
				<FieldColumn fDirection="column">
					<Label htmlFor="add-movie-url">movie url</Label>
					<Input placeholder="https://" id="add-movie-url" />
				</FieldColumn>
				<FieldColumn fDirection="column">
					<Label htmlFor="add-movie-rating">RATING</Label>
					<Input placeholder="7.8" id="add-movie-rating" />
				</FieldColumn>
			</Flex>
			<Flex jContent="space-between">
				<FieldColumn fDirection="column">
					<Label htmlFor="add-movie-genre">genre</Label>
					<Input placeholder="Select Genre" id="add-movie-genre" />
				</FieldColumn>
				<FieldColumn fDirection="column">
					<Label htmlFor="add-movie-runtime">RUNTIME</Label>
					<Input placeholder="minutes" id="add-movie-runtime" />
				</FieldColumn>
			</Flex>
			<Flex fDirection="column" style={{ marginBottom: '60px' }}>
				<Label htmlFor="add-movie-overview">OVERVIEW</Label>
				<TextArea placeholder="Movie description" id="add-movie-overview" />
			</Flex>
			<Flex jContent="flex-end">
				<Button>reset</Button>
				<SubmitButton>submit</SubmitButton>
			</Flex>
		</>
	)
}

const Label = styled.label`
	font-weight: 600;
	font-size: 16px;
	line-height: 20px;
	text-transform: uppercase;
	letter-spacing: 0.8px;
	color: #f65261;
	margin-bottom: 12px;
`

const Input = styled.input.attrs({ type: 'text' })`
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

const FieldColumn = styled(Flex)`
	&:nth-child(odd) {
		flex: 0 1 525px;
		margin-right: 30px;
	}

	&:nth-child(even) {
		flex: 1 0 auto;
	}

	margin-bottom: 30px;
`

const TextArea = styled.textarea.attrs({ rows: 7 })`
	resize: none;
	background-color: rgba(50, 50, 50, 0.8);
	font-family: Montserrat, sans-serif;
	font-style: normal;
	font-weight: normal;
	font-size: 20px;
	line-height: 24px;
	color: #ffffff;
	border: none;
	border-radius: 5px;
	box-sizing: border-box;
	padding: 18px;
`

const Button = styled.button`
	font-family: Montserrat, sans-serif;
	font-style: normal;
	font-weight: 500;
	font-size: 20px;
	line-height: 24px;
	background-color: transparent;
	box-sizing: border-box;
	color: #f65261;
	border: 1px solid #f65261;
	border-radius: 5px;
	padding: 0;
	width: 180px;
	height: 56px;
	text-transform: uppercase;

	& + & {
		margin-left: 16px;
	}
`

const SubmitButton = styled(Button)`
	background-color: #f65261;
	color: white;
`
