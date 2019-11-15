import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Card from './Show';
import Error from './Error';
import { Header, Footer } from './Layout';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css'; // React
import './index.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'; // Router
import { Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<div>
				<Header/>
				<Switch>
					<Route path={["/", "/index"]} exact component={App} />
					<Route path="/name/:id" component={Card} />
					<Route component={Error} />
				</Switch>
				<Footer/>
			</div>
		</Router>
	</Provider>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
