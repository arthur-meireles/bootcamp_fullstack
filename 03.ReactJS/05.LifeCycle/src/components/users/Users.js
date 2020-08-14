import React, { Component } from 'react';

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
		const { secondsVisible } = this.state;
		this.interval = setInterval(() => {
			this.setState({ secondsVisible: secondsVisible + 1 });
		}, 1000);
	}

	componentDidUpdate() {
		console.log('ComponentDidUpdate de Users.js');
	}

	componentWillUnmount() {
		console.log('ComponentWillUnmount de Users.js');
	}

	render() {
		const { users } = this.props;
		const { secondsVisible } = this.state;

		return (
			<div>
				<p>Componente visível por: {secondsVisible}</p>
				{users.map(user => {
					const { login, name, picture } = user;
					return (
						<div>
							<p key={login.uuid}>{name.first}</p>
						</div>
					);
				})}
			</div>
		);
	}
}
