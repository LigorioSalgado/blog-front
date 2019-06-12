import React, { Component } from 'react';
import { API } from '../../utils/http';


const displayCards = (title) => {
	return (
		<div className="col-md-3">
			<div className="card" >
				<img className="card-img-top" src="https://picsum.photos/200/200" />
				<div className="card-body">
					<h5 className="card-title">{title}</h5>
				</div>
			</div>
		</div>
	)
}


class Home extends Component {

	constructor() {
		super();

		this.state = {
			posts: [],
			isLoading:true
		}
	}

	componentDidMount() {
		API.get('/posts').then((response) => {
			this.setState({isLoading:false, posts: response.data });
		}).catch((err) => {
			// eslint-disable-next-line no-console
			console.log(err);
		})

	}

	render() {
		const {posts,isLoading} =  this.state
		const cardPost = posts.map((post) => {
			return displayCards(post.title);
		})
		return (
			<div className="container">
				<h2>Post recientes</h2>
				<div className="row mt-4">
					{
						(isLoading) ? (<h3>Cargando...</h3>) : (cardPost)	
					}
				</div>
			</div>
		)
	}
}

export default Home;
