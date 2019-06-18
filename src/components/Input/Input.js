/* eslint-disable react/prop-types */
import React, { Component } from 'react';



class Input extends Component {

	constructor(props) {
		super(props)

		this.state = {
			value: props.value
		}
	}

	componentDidUpdate(prevProps) {
		if (prevProps.value !== this.props.value) {
			this.setState({
				value: this.props.value
			});
		}


	}

	render() {
		const { label, placeholder, name, type, onChange, required, isTextArea } = this.props;
		const { value } = this.state;
		return (
			(isTextArea) ? (
				<div className="form-group">
					<label>{label}</label>
					<textarea  className="form-control"
						cols="30"
						rows="15"
						value={value}
						name={name}
						onChange={onChange} required={required} />
				</div>
			) : (
					<div className="form-group">
						<label>{label}</label>
						<input className="form-control"
							value={value}
							placeholder={placeholder}
							name={name}
							type={type} onChange={onChange} required={required} />
					</div>
				)
		)
	}
}

export default Input;
