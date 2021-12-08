import { useFormik } from 'formik'
import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { appSelectors, closeModal, loadingOff, loadingOn } from '~/redux/appSlice'
import { getMoviesByQuery } from '~/redux/moviesSlice'
import { querySelectors } from '~/redux/querySlice'

export const DeleteMovie = (): JSX.Element => {
	const id = useSelector(appSelectors.id)
	const query = useSelector(querySelectors.all)
	const dispatch = useDispatch()
	const formik = useFormik({
		initialValues: {
			submit: 'confirm',
		},
		onSubmit: async () => {
			dispatch(loadingOn())
			await fetch(`http://localhost:4000/movies/${id}`, { method: 'DELETE' })
			dispatch(closeModal())
			dispatch(getMoviesByQuery(query, true))
			dispatch(loadingOff())
		},
	})
	return (
		<form onSubmit={formik.handleSubmit}>
			<Title>Delete MOVIE</Title>
			<Description>Are you sure you want to delete this movie?</Description>
			<Button value={formik.values.submit} type="submit" disabled={formik.isSubmitting} />
		</form>
	)
}

const Title = styled.h3`
	padding: 0;
	margin: 0 0 40px 0;
	font-weight: 300;
	font-size: 40px;
	line-height: 49px;
	text-transform: uppercase;
	color: #ffffff;
`

const Description = styled.p`
	font-weight: normal;
	font-size: 20px;
	line-height: 24px;
	padding: 0;
	margin-bottom: 52px;

	color: #ffffff;
`

const Button = styled.input`
	font-family: Montserrat, sans-serif;
	font-style: normal;
	font-weight: 500;
	font-size: 20px;
	line-height: 24px;
	box-sizing: border-box;
	border: 1px solid #f65261;
	border-radius: 5px;
	padding: 0;
	width: 180px;
	height: 56px;
	text-transform: uppercase;
	background-color: #f65261;
	color: white;
	margin-left: auto;
	margin-right: 0;
	display: block;
`
