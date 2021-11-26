import React from 'react'
import { Link } from 'react-router-dom'

export const NotFound = (): JSX.Element => {
	return (
		<div style={{ color: 'white' }}>
			<div>404 Page not found</div>
			<Link to="search" style={{ color: 'red' }}>
				Go to Home Page
			</Link>
		</div>
	)
}
