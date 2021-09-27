import { ErrorTemplate } from '@components/ErrorTemplate'
import * as React from 'react'
import { getCards } from '~/data/data'

export const ErrorBoundary = (component: React.FC): React.FC => {
	if (!getCards().length) {
		return ErrorTemplate
	}

	return component
}
