import React, { Component } from 'react';
import { Input } from '../Input';


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
			this.setState(
				{
					file:file,
					imagePreview:reader.result
				}
			)
		}

		reader.readAsDataURL(file);
	}

	render() {
		return (
			<div className="container">
				<div className="row my-4">
					<h2>Desde FormPost</h2>
					<div className="col-md-8 my-5 py-5">
						<form className="" >
							<Input name="title" label="Title:" placeholder="Awesome Title"
								value={this.state.title} type="text" onChange={this.inputChange} required />
							<Input name="text" label="Text:"
								value={this.state.text}  onChange={this.inputChange} required isTextArea />
							
							<Input name="image" label="Image:" 
								value={this.state.image} type="file" onChange={this.imageChange} required />
							
							<img src={this.state.imagePreview} width="150" />
			
						</form>
					</div>
				</div>
			</div>
		)
	}

}

export default FormPost;