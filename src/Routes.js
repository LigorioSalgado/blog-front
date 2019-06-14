import React , {Component} from 'react';
import { Route, Switch} from 'react-router-dom';
import { Home } from './components/Home';
import { Login } from './components/Login';
class Routes extends Component{


	render(){
		return(
			<Switch>
				<Route exact path="/" component={Home}/>
				<Route exact path="/login" component={Login}/>
			</Switch>
		)
	}

}
export default Routes;
