import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { genreSelectors } from '~/redux/genreSlice'
import { querySelectors, setGenre } from '~/redux/querySlice'

export const Genre = (): JSX.Element => {
	const genre = useSelector(genreSelectors.genre)
	const selectedGenre = useSelector(querySelectors.filter)
	const dispatch = useDispatch()

	return (
		<Flex>
			<GenreItem
				active={!selectedGenre}
				onClick={() => {
					dispatch(setGenre())
				}}
			>
				ALL
			</GenreItem>
			{genre
				.filter((item, index) => index <= 5)
				.map((item, index) => {
					return (
						<GenreItem
							key={index}
							onClick={() => {
								dispatch(setGenre(item))
							}}
							active={selectedGenre === item}
						>
							{item}
						</GenreItem>
					)
				})}
		</Flex>
	)
}

const Flex = styled.div`
	display: flex;

	* {
		margin-right: 30px;
	}

	*:last-child {
		margin-right: 0;
	}
`

const GenreItem = styled.button<{ active?: boolean }>`
	border: none;
	background: transparent;
	box-sizing: border-box;
	font-family: Montserrat, sans-serif;
	font-style: normal;
	font-weight: 500;
	font-size: 16px;
	line-height: 20px;
	text-transform: uppercase;
	color: #ffffff;
	padding: 0;
	position: relative;

	&:after {
		display: ${(props) => (props.active ? 'block' : 'none')};
		content: '';
		position: absolute;
		bottom: -23px;
		height: 3px;
		width: 100%;
		background-color: #f65261;
	}
`
