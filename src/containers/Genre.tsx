import * as React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import { GenreType } from '~/types'

type PropsGenre = {
	genre: GenreType[]
}

const DEFAULT = 'DEFAULT'

export const Genre = ({ genre }: PropsGenre): JSX.Element => {
	const [active, setActive] = useState<string | number>(DEFAULT)

	return (
		<Flex>
			<GenreItem {...activeGenre(DEFAULT, active)} onClick={() => setActive(DEFAULT)}>
				ALL
			</GenreItem>
			{genre.map((item) => (
				<GenreItem key={item.id} {...activeGenre(item.id, active)} onClick={() => setActive(item.id)}>
					{item.value}
				</GenreItem>
			))}
		</Flex>
	)
}

const activeGenre = (key: number | string, state: number | string) => {
	if (key === state) {
		return {
			active: true,
		}
	}

	return {}
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
