import * as React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import arrowSelect from '~/asserts/arrow-select.svg'
import { SortBy } from '~/queries/getMovies'
import { setSort } from '~/redux/querySlice'
import { RootStore } from '~/redux/store'

type Category = {
	id: number
	value: SortBy
	title: string
}

const sortCategory: Category[] = [
	{
		id: 1,
		value: 'release_date',
		title: 'release date',
	},
	{
		id: 2,
		value: 'vote_average',
		title: 'rating',
	},
	{
		id: 3,
		value: 'title',
		title: 'movie title',
	},
	{
		id: 4,
		value: 'runtime',
		title: 'duration',
	},
]

export const Sort = (): JSX.Element => {
	return (
		<Flex>
			<SortTextLabel>Sort by</SortTextLabel>
			<Select>
				<>
					{sortCategory.map((item) => (
						<Option key={item.id} value={item.value}>
							{item.title}
						</Option>
					))}
				</>
			</Select>
		</Flex>
	)
}

const Option = styled.option`
	background-color: #232323;
`

type SelectProps = {
	children: JSX.Element | Array<JSX.Element>
}

const Select = ({ children }: SelectProps) => {
	const dispatch = useDispatch()

	const selectValue = useSelector((store: RootStore) => store.query.sortBy)

	useEffect(() => {
		if (!selectValue) {
			dispatch(setSort({ sortBy: 'release_date', sortOrder: 'desc' }))
		}
	}, [selectValue])

	return (
		<SelectWrapper>
			<SelectInner
				value={selectValue}
				onChange={(e) => {
					dispatch(setSort({ sortBy: e.target.value, sortOrder: 'desc' }))
				}}
			>
				{children}
			</SelectInner>
		</SelectWrapper>
	)
}

const SelectWrapper = styled.div`
	position: relative;

	&:after {
		content: url('${arrowSelect}');
		display: block;
		position: absolute;
		right: 2px;
		top: 0;
	}
`

const SelectInner = styled.select`
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
	padding: 0 16px 0 0;
	position: relative;
	appearance: none;
	text-align: right;
`

const SortTextLabel = styled.label`
	font-size: 16px;
	line-height: 20px;
	text-transform: uppercase;
	opacity: 0.6;
`

const Flex = styled.div`
	display: flex;

	* {
		margin-right: 8px;
	}

	*:last-child {
		margin-right: 0;
	}
`
