import React, { Component } from 'react'
import { API } from '../../utils/http';


class Login extends  Component {

	constructor(props){
		super(props);

		this.state = {
			username:"",
			password:""
		}
	}

	changeInput = (event) => {

		const {name,value} =  event.target;
		this.setState({[name]:value});
	}

	sendData = (event) => {
		event.preventDefault();
		API.post('/login',this.state).then((response) => {
			const {data} =  response
			localStorage.setItem("blogToken",data.token);
			this.props.history.push('/');
		}).catch((err) => {
			console.log()
		})
	}

	render(){
		const {username, password} =  this.state
		return(
			<div className="container">
				<h2>Login</h2>
				<div className="row justify-content-center">
					<div className="col-md-9">
						<form onSubmit={this.sendData}>
							<div className="form-group">
								<label>Username: </label>
								<input className="form-control" 
								value={username} 
								placeholder="prueba"
								name="username" 
								type="text" onChange={this.changeInput} required />
							</div>
							<div className="form-group">
								<label>Password:</label>
								<input className="form-control"  
									value={password}
									 placeholder="prueba"
									 name="password" 
									 type="password" onChange={this.changeInput}  required/>
							</div>
							<button type="submit" className="btn btn-lg btn-dark">Enviar</button>
						</form>
					</div>
				</div>
			</div>
		)
	}
}


export default Login;
