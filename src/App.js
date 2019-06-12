import React, { Component } from 'react';
import './App.scss';
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
//import Navbar from './components/Navbar/Navbar'

class  App extends Component {

	render(){
		return (
			<div>
				<Navbar/>
				<Home/>
			</div>
		);
	}
}

export default App;
