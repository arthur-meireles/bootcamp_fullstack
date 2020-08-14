import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import './index.css';
import Users from './components/users/Users';
import './index.css';

import Toggle from './components/toggle/Toggle';

export default class App extends Component {
	constructor() {
		super();

		this.state = {
			users: [],
			showUsers: false,
		};
	}

	async componentDidMount() {
		try {
			const res = await fetch(
				'https://randomuser.me/api/?seed=rush&noinfo&nat=BR&results=10',
			);
			const json = await res.json();

			this.setState({ users: json.results });
		} catch (err) {
			console.log(err);
		}
	}

	handleShowUsers = () => {
		const { showUsers } = this.state;
		this.setState({ showUsers: !showUsers });
	};

	render() {
		const { showUsers, users } = this.state;
		return (
			<div>
				<h2>React lifeCycle</h2>
				<Toggle
					description="Show users: "
					enabled={showUsers}
					onToggle={this.handleShowUsers}
				/>
				<hr />
				{showUsers && <Users users={users} />}
			</div>
		);
	}
}
