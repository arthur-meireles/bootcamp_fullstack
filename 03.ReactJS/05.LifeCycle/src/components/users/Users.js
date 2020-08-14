import React, { Component } from 'react';

export default class Users extends Component {
    componentDidMount() {
        console.log('componentDidMount de Users.js')
    }

	componentDidUpdate() {
		console.log('ComponentDidUpdate de Users.js');
	}

	componentWillUnmount() {
		console.log('ComponentDidWillUnmount de Users.js');
    }
    
	render() {
		const { users } = this.props;

		return (
			<div>
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
