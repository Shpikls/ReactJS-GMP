import { GenreCheckbox } from '@components/EditMovie/GenreCheckbox'
import { useField } from 'formik'
import * as React from 'react'
import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

const isActive = (item: string, genresList: string[]) => {
	const match = genresList.filter((innerItem) => innerItem === item)
	return match.length > 0
}

const genresToString = (genres: string[]) => {
	if (genres.length < 2) {
		return genres[0]
	}

	return genres.reduce((accum, item) => `${accum}, ${item}`)
}

const genreShortFormat = (genres: string[]) => {
	if (genres.length > 3) {
		return `${genresToString(genres.slice(0, 3))}, etc`
	}

	return genresToString(genres)
}

const allGenres = async () => {
	const data = await fetch('http://localhost:4000/genres', {
		method: 'GET',
	})

	return data.json()
}

export const GenreInput = (): JSX.Element => {
	const [field] = useField({ name: 'genres' })
	const [isOpen, setIsOpen] = useState(false)
	const [isEmpty, setIsEmpty] = useState(false)
	const [genres, setGenres] = useState([])
	const genreRef = useRef<HTMLDivElement>({} as HTMLDivElement)

	useEffect(() => {
		allGenres().then((data) => {
			setGenres(data)
		})

		const handleOutEvent = ({ target }: { target: EventTarget | null }) => {
			const genreWrapper = genreRef.current

			if (
				genreWrapper &&
				target &&
				target instanceof Node &&
				!(genreWrapper.contains(target) || genreWrapper === target)
			) {
				setIsOpen(false)
			}
		}

		document.addEventListener('click', handleOutEvent)
		document.addEventListener('focusin', handleOutEvent)

		return () => {
			document.removeEventListener('click', handleOutEvent)
			document.removeEventListener('focusin', handleOutEvent)
		}
	}, [])

	useEffect(() => {
		const innerIsEmpty = field.value.length > 0
		if (isEmpty !== innerIsEmpty) setIsEmpty(innerIsEmpty)
	}, [field.value])

	return (
		<GenreWrapper ref={genreRef}>
			<GenreButton
				onClick={(e) => {
					e.preventDefault()
					setIsOpen((prev) => !prev)
				}}
				isEmpty={isEmpty}
				id="genres-btn"
			>
				{isEmpty ? genreShortFormat(field.value.sort()) : 'Select genre'}
			</GenreButton>
			{isOpen && (
				<GenreList>
					{genres.map((item, index) => (
						<GenreCheckbox
							key={index}
							id={index}
							isActive={isActive(item, field.value)}
							value={item}
							onChangeHandler={field.onChange}
						/>
					))}
				</GenreList>
			)}
		</GenreWrapper>
	)
}

const GenreButton = styled.button`
	font-family: Montserrat, sans-serif;
	font-style: normal;
	font-weight: normal;
	font-size: 20px;
	line-height: 24px;
	height: 56px;
	color: ${({ isEmpty }: { isEmpty: boolean }) => (isEmpty ? '#ffffff' : 'rgba(256, 256, 256, 0.3)')};
	border-radius: 5px;
	box-sizing: border-box;
	padding: 0 18px;
	background-color: rgba(50, 50, 50, 0.8);
	border: none;
	text-align: left;
	width: 100%;
	position: relative;
`

const GenreWrapper = styled.div`
	position: relative;
`

const GenreList = styled.div`
	position: absolute;
	background: #232323;
	border-radius: 5px;
	width: 100%;
	top: calc(100% + 4px);
	left: 0;
	box-shadow: 0 0 2px rgba(0, 0, 0, 0.1), 0 2px 10px rgba(0, 0, 0, 0.07), 0 10px 20px rgba(0, 0, 0, 0.05),
		0 10px 50px rgba(0, 0, 0, 0.05);
	padding: 18px;
	box-sizing: border-box;
	overflow-y: auto;
	display: flex;
	flex-wrap: wrap;
	z-index: 999;
`
