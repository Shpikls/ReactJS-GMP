import { Button } from '@styled/Button'
import * as React from 'react'
import styled from 'styled-components'

export const ErrorTemplate = (): JSX.Element => (
	<>
		<Error>Data fail</Error>
		<RefreshButton onClick={() => window.location.reload()}>Refresh Page</RefreshButton>
	</>
)

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
