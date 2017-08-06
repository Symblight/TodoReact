import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './stylesheet/app.scss'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'

let store = configureStore();

const MaterialUI = ()=>(
	<MuiThemeProvider>
		<Provider store={store}>
			<App />
		</Provider>
	</MuiThemeProvider>
);

ReactDOM.render(
	<MaterialUI />,
	document.getElementById('react-root')
);