import { App } from '@containers/App'
import 'bootstrap/dist/css/bootstrap.min.css'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import './index.scss'
import { store } from './redux/store'

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root'),
)
