import React, { Component } from 'react';
import User from './User';

export default class Users extends Component {
	constructor() {
		super();
		this.state = {
			secondsVisible: 0,
		};
		this.interval = null;
	}

	componentDidMount() {
		console.log('componentDidMount de Users.js');

		this.interval = setInterval(() => {
			this.setState({
				secondsVisible: this.state.secondsVisible + 1,
			});
		}, 1000);
	}

	componentDidUpdate() {
		console.log('ComponentDidUpdate de Users.js');
	}

	componentWillUnmount() {
		clearInterval(this.interval);
		console.log('ComponentWillUnmount de Users.js');
	}

	render() {
		const { users } = this.props;
		const { secondsVisible } = this.state;

		return (
			<div>
				<p>Componente visível por: {secondsVisible} segundos</p>
				<ul>
					{users.map(user => {
						return <User user={user}/>;
					})}
				</ul>
			</div>
		);
	}
}
