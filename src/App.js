import React, { Component } from 'react';
import {BrowserRouter as Router } from 'react-router-dom'
import './App.scss';
import { Navbar } from './components/Navbar';
import Routes from './Routes';
//import Navbar from './components/Navbar/Navbar'

class  App extends Component {

	render(){
		return (
			<div>
				<Navbar/>
				<Router>
					<Routes/>
				</Router>
			</div>
		);
	}
}

export default App;
