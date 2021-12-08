import { NotFound } from '@components/NotFound'
import { App } from '@containers/App'
import 'bootstrap/dist/css/bootstrap.min.css'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { store } from '~/redux/store'
import './index.scss'

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/">
					<Route index element={<Navigate to="/search" />} />
					<Route
						path="/search"
						element={
							<Provider store={store}>
								<App />
							</Provider>
						}
					/>
					<Route path="*" element={<NotFound />} />
				</Route>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root'),
)
