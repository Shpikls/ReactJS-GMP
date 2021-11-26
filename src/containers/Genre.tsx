import * as React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { queryStateToAppUrl } from '~/helpers/queryStateToAppUrl'
import { genreSelectors } from '~/redux/genreSlice'
import { querySelectors } from '~/redux/querySlice'

export const Genre = (): JSX.Element => {
	const genre = useSelector(genreSelectors.genre)
	const query = useSelector(querySelectors.all)
	const selectedGenre = useSelector(querySelectors.filter)
	const navigate = useNavigate()

	return (
		<Flex>
			<GenreItem
				active={!selectedGenre}
				onClick={() => {
					const navigateURL = queryStateToAppUrl(query, { genre: false })
					navigate(`?${navigateURL}`, { replace: true })
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
								const navigateURL = queryStateToAppUrl(query, { genre: item })
								navigate(`?${navigateURL}`, { replace: true })
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
