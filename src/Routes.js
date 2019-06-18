import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Home } from './components/Home';
import { Login } from './components/Login';
import { FormPost } from './components/FormPost'
import isAuthenticathed from './utils/isAuthenticathed';


const Logout = () => {
	localStorage.removeItem('blogToken');
	return <Redirect to="/" />
}

const PrivateRoute = ({ component: Component, ...rest }) => (
	<Route {...rest} render={
		(props) => (
			isAuthenticathed() ? <Component {...props} /> : <Redirect to="/" />
		)
	}
	/>
)

const ROUTES = [
	<Route exact path="/" component={Home} key={1} />,
	<Route exact path="/login" component={Login} key={2} />,
	<PrivateRoute exact path="/logout" component={Logout} key={3} />,
	<PrivateRoute exact path="/post/add" component={FormPost} key={4} /> 
]

export default ROUTES;
