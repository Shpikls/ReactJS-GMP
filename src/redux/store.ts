import { configureStore } from '@reduxjs/toolkit'
import appReducer from '~/redux/appSlice'
import genreReducer from '~/redux/genreSlice'
import moviesReducer from '~/redux/moviesSlice'
import queryReducer from '~/redux/querySlice'

export const store = configureStore({
	reducer: {
		app: appReducer,
		movies: moviesReducer,
		query: queryReducer,
		genre: genreReducer,
	},
})

export type RootStore = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
