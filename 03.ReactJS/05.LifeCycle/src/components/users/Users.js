import React, { Component } from 'react';

export default class Users extends Component {
	render() {
		const { users } = this.props;
		return <div>{users.map(({name, id}) => {
            return <p key={id}>{name}</p>
        })}</div>;
	}
}
