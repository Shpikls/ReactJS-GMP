// @ts-nocheck
import { configureStore } from '@reduxjs/toolkit'
import { render as rtlRender } from '@testing-library/react'
import React from 'react'
import { Provider } from 'react-redux'

import appReducer from '~/redux/appSlice'
import genreReducer from '~/redux/genreSlice'
import moviesReducer from '~/redux/moviesSlice'
import queryReducer from '~/redux/querySlice'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function render(
	// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
	ui,
	{
		preloadedState,
		store = configureStore({
			reducer: {
				app: appReducer,
				movies: moviesReducer,
				query: queryReducer,
				genre: genreReducer,
			},
			preloadedState,
		}),
		...renderOptions
	} = {},
) {
	// eslint-disable-next-line react/prop-types
	function Wrapper({ children }) {
		return <Provider store={store}>{children}</Provider>
	}
	return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

export * from '@testing-library/react'

export { render }
