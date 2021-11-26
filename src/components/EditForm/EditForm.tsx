import { GenreCheckboxLayout } from '@components/EditMovie/GenreCheckboxLayout'
import { Flex } from '@styled/Flex'
import { Formik, FormikErrors, FormikHelpers } from 'formik'
import Joi from 'joi'
import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { useInitialValues } from '~/hooks/useInitialValues'
import { appSelectors, closeModal } from '~/redux/appSlice'
import { getMoviesByQuery } from '~/redux/moviesSlice'
import { querySelectors } from '~/redux/querySlice'
import { Error, FieldForm, Label } from '../EditMovie/FieldForm'

const MovieModel = Joi.object({
	title: Joi.string().required(),
	vote_average: Joi.number().min(0).max(100),
	release_date: Joi.string().isoDate(),
	poster_path: Joi.string().uri().required(),
	overview: Joi.string().required(),
	genres: Joi.array().items(Joi.string().required()),
	runtime: Joi.number().integer().min(0).required(),
}).prefs({ convert: false, abortEarly: false })

interface QueryValues {
	title: string
	overview: string
	genres: string[]
	runtime?: number
	poster_path: string
	release_date?: string
	vote_average?: number
	id?: number
}

export interface FormValues {
	title: string
	poster_path: string
	overview: string
	runtime: string
	genres: string[]
	vote_average?: string
	release_date?: string
}

const mapValuesToQuery = (values: FormValues, id?: number): Partial<QueryValues> => {
	const result: Partial<QueryValues> = {}

	if (id) result.id = id
	if (values.title) result.title = values.title
	if (values.overview) result.overview = values.overview
	if (values.genres) result.genres = values.genres
	if (values.poster_path) result.poster_path = values.poster_path
	if (values.runtime) result.runtime = Number(values.runtime)
	if (values.vote_average) result.vote_average = Number(values.vote_average)
	if (values.release_date) result.release_date = values.release_date

	return result
}

const validate = (values: FormValues) => {
	const errors: FormikErrors<FormValues> = {}
	const mappedValues = mapValuesToQuery(values)
	const { error } = MovieModel.validate(mappedValues)

	error?.details.forEach((item) => {
		if (item) {
			item.path.forEach((path) => {
				// TODO: описать типизацию
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				// @ts-ignore
				errors[path] = item.message
			})
		}
	})

	return errors
}

export const EditForm = (): JSX.Element | null => {
	const id = useSelector(appSelectors.id)
	const values = useInitialValues(id)
	const query = useSelector(querySelectors.all)
	const dispatch = useDispatch()

	const onSubmit = (values: FormValues, helpers: FormikHelpers<FormValues>, id?: number): void => {
		const putValues = async (values: FormValues) => {
			return await fetch('http://localhost:4000/movies', {
				method: id ? 'PUT' : 'POST',
				body: JSON.stringify(mapValuesToQuery(values, id)),
				headers: {
					'Content-Type': 'application/json',
				},
			})
		}

		putValues(values).then((r) => {
			if (r.status === 200 || r.status === 201) {
				dispatch(closeModal())
				dispatch(getMoviesByQuery(query, true))
			} else {
				r.json().then((r) => {
					// TODO: обработка ошибок от сервера FormikHelpers.setError
					console.log(r)
				})
			}
		})
	}

	if (!values) {
		return null
	}

	return (
		<Formik initialValues={values} validate={validate} onSubmit={(values, helpers) => onSubmit(values, helpers, id)}>
			{({ handleSubmit, handleReset, handleChange, handleBlur, values, errors }) => {
				return (
					<form onSubmit={handleSubmit}>
						<Flex jContent="space-between">
							<FieldForm id="title" title="Title" placeholder="Movie Name" />
							<FieldForm id="release_date" title="RELEASE DATE" placeholder="Select Date" />
						</Flex>
						<Flex jContent="space-between">
							<FieldForm id="poster_path" title="movie url" placeholder="https://" />
							<FieldForm id="vote_average" title="RELEASE DATE" placeholder="7.8" />
						</Flex>
						<Flex jContent="space-between">
							<GenreCheckboxLayout />
							<FieldForm id="runtime" title="RUNTIME" placeholder="minutes" />
						</Flex>
						<div style={{ position: 'relative' }}>
							<Flex fDirection="column" style={{ marginBottom: '60px' }}>
								<Label htmlFor="overview">OVERVIEW</Label>
								<TextArea
									placeholder="Movie description"
									id="overview"
									value={values.overview}
									onChange={handleChange}
									onBlur={handleBlur}
								/>
								{errors.overview && <Error>{errors.overview}</Error>}
							</Flex>
						</div>
						<Flex jContent="flex-end">
							<Button type="reset" onClick={handleReset}>
								reset
							</Button>
							<SubmitButton type="submit">submit</SubmitButton>
						</Flex>
					</form>
				)
			}}
		</Formik>
	)
}

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
