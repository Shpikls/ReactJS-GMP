import * as React from 'react'
import { useContext } from 'react'
import styled from 'styled-components'
import arrowSelect from '~/asserts/arrow-select.svg'
import { SortContext } from '~/context'

type Category = {
	id: number
	value: string
}

const sortCategory: Category[] = [
	{
		id: 1,
		value: 'release date',
	},
	{
		id: 2,
		value: 'rating',
	},
	{
		id: 3,
		value: 'movie title',
	},
	{
		id: 4,
		value: 'duration',
	},
]

export const Sort = (): JSX.Element => {
	return (
		<Flex>
			<SortTextLabel>Sort by</SortTextLabel>
			<Select>
				{sortCategory.map((item) => (
					<Option key={item.id} value={item.value}>
						{item.value}
					</Option>
				))}
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
	const [sort, setSort] = useContext(SortContext)

	return (
		<SelectWrapper>
			<SelectInner value={sort} onChange={(event) => setSort(event.target.value)}>
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
