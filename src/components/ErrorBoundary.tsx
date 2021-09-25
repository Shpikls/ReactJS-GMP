import * as React from 'react'
import styled from 'styled-components'
import { Button } from '~/styled/Button'
import { Item } from '~/types'

type PropsErrorBoundary = {
	data: Array<Item> | Array<[]>
	children: Array<JSX.Element> | JSX.Element
}

export const ErrorBoundary = ({ data, children }: PropsErrorBoundary): JSX.Element => {
	if (!data.length) {
		return (
			<>
				<Error>Data fail</Error>
				<RefreshButton onClick={() => window.location.reload()}>Refresh Page</RefreshButton>
			</>
		)
	}

	return <>{children}</>
}

const Error = styled.div`
	color: white;
	font-weight: 400;
	text-align: center;
	margin-top: 40px;
`

const RefreshButton = styled(Button)`
	width: 200px;
	height: 48px;
	margin: 10px auto;
	display: block;
`
