import React, { Component } from 'react';
import { Input } from '../Input';
import  { API }  from '../../utils/http';

class FormPost extends Component {

	constructor(props) {
		super(props);

		this.state = {
			title:"",
			text:"",
			image:"",
			imagePreview:""
		}

	}


	inputChange = (event) => {
		const { name, value } = event.target;
		this.setState({ [name]: value });
	}

	imageChange = (event) => {
		const reader =  new FileReader();
		const file =  event.target.files[0];

		reader.onloadend = () => {
			console.log(file)
			this.setState(
				{
					file,
					image:file,
					imagePreview:reader.result
				}
			)
		}

		reader.readAsDataURL(file);
	}

	sendImage = async() => {
		const { file } =  this.state;
		const  data = new FormData();
		data.append('image', file);
		const config = {
			headers:{
				'content-type':"multipart/form-data"
			}
		}
		const response  =  await API.post('/posts/upload',data,config)
		if(response && response.status == 200){
			return response.data.url;
		}	

	}

	submitForm = async(e) => {
		e.preventDefault();
		const {title,text} = this.state;
		const token =  localStorage.getItem('blogToken');
		const image =  await this.sendImage()
		const config = {
			headers : {
				"Authorization":`JWT ${token}`,
				"Content-Type":"application/json"
			}
		}
		const data = {
			title,
			text,
			image
		}
		const response =  await API.post('/posts',data,config);

		if(response && response.status == 201){
		 	this.props.history.push('/');
		 }else{
		 	console.log("Hubo un error")
		}

	}

	render() {
		return (
			<div className="container">
				<div className="row my-4">
					<h2>Desde FormPost</h2>
					<div className="col-md-8 my-5 py-5">
						<form className="" onSubmit={this.submitForm} >
							<Input name="title" label="Title:" placeholder="Awesome Title"
								value={this.state.title} type="text" onChange={this.inputChange} required />
							<Input name="text" label="Text:"
								value={this.state.text}  onChange={this.inputChange} required isTextArea />
							
							<Input name="image" label="Image:" 
								 type="file" onChange={this.imageChange} required />
							
							<img src={this.state.imagePreview} width="150" />

							<button className="btn btn-danger btn-lg"> Enviar </button>
						</form>
					</div>
				</div>
			</div>
		)
	}

}

export default FormPost;