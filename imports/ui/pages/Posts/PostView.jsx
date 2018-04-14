import React from 'react';

export default class PostView extends React.Component {
	constructor() {
		super();
		this.state = {post: null};
	}

	componentDidMount() {
		Meteor.call('post.getAndView', this.props.match.params.id, (err, post) => {
			if (err) {
				return;
			}
			this.setState({post});
		});
	}

	render() {
		const {history} = this.props;
		const {post} = this.state;

		if (!post) {
			return (
				<div>
					<p>
						Loading....
					</p>
					<button onClick={() => history.push('/posts')}>Back to posts</button>
				</div>
			)
		}

		return (
			<div className="post">
				<p>Post id: {post._id} </p>
				<p>Post title: {post.title}</p>
				<p>Post Description: {post.description}</p>
				<p>Post Type: {post.type} </p>
				<p>Created At: {post.createdAt.toLocaleString()} </p>
				<p>Post Views: {post.views} </p>
				<button onClick={() => history.push('/posts')}>Back to posts</button>
			</div>
		)
	}
}
