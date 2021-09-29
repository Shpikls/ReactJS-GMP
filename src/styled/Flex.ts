import styled from 'styled-components'

type JustifyContent =
	| 'flex-start'
	| 'flex-end'
	| 'center'
	| 'space-between'
	| 'space-around'
	| 'space-evenly'
	| 'initial'
	| 'inherit'

type FlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse'

export const Flex = styled.div<{ jContent?: JustifyContent; fDirection?: FlexDirection }>`
	display: flex;
	${({ jContent }) => {
		if (jContent) return `justify-content: ${jContent};`
	}}
	${({ fDirection }) => {
		if (fDirection) return `flex-direction: ${fDirection};`
	}}
`
