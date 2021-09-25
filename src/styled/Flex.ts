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

export const Flex = styled.div<{ jContent?: JustifyContent }>`
	display: flex;
	${({ jContent }) => {
		if (jContent) return `justify-content: ${jContent}`
	}};
`
