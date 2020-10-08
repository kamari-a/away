import React from 'react';
import Main from './pages/Main';
import Listings from './pages/Listings';
import Listing from './pages/Listing';
import Auth from './components/Auth/Auth';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

const App = () => {
	return(
		<BrowserRouter>
			<Switch>
			<Route path='/' exact component={Main}/>
			<Route path='/listings' exact component={Listings}/>
			<Route path='/listings/:id' exact component={Listing}/>
			<Route path='/listings/:id/reviews' exact component={Listing}/>
			<Route path='/login' exact component={Auth}/>
			</Switch>
		</BrowserRouter>
	)
}

export default App;

