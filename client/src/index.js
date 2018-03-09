import React from 'react';
import { render } from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { HashRouter } from 'react-router-dom';
import Header from './Pages/Header/Header';
import { Main } from './routes';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './CSS/Page.css';
import './CSS/index.css';

const App = () => (
	<div>
		<Header />
		<Main />
	</div>
)

render((
	<HashRouter>
		<div>
			<App />
		</div>
	</HashRouter>),
	document.getElementById('root')
);

registerServiceWorker();
