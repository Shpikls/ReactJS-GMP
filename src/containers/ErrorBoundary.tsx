import { ErrorTemplate } from '@components/ErrorTemplate'
import * as React from 'react'
import { Item } from '~/types'

export const ErrorBoundary = (component: React.FC, data: Array<Item> | Array<[]>): React.FC => {
	if (!data.length) {
		return ErrorTemplate
	}

	return component
}
