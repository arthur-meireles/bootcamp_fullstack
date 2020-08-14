import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import './index.css';
import Users from './components/users/Users';
import './index.css';
import 'antd/dist/antd.css';
import { Switch } from 'antd';

export default class App extends Component {
	constructor() {
		super();

		this.state = {
			users: [],
			showUsers: false,
		};
	}

	async componentDidMount() {
		const res = await fetch(
			'https://randomuser.me/api/?seed=rush&noinfo&nat=BR&results=10',
		);
		const json = await res.json();

		this.setState({ users: json.results });
	}

	componentDidUpdate() {
		console.log('ComponentDidUpdate de app.js');
	}

	componentWillUnmount() {
		console.log('ComponentDidWillUnmount de app.js');
	}

	handleShowUsers = event => {
		this.setState({ showUsers: event });
	};

	render() {
		const { showUsers, users } = this.state;
		return (
			<div>
        <div>
        <label>
          Show users: 
        <Switch onChange={this.handleShowUsers} />
        </label>
        </div>
				<hr />
				{showUsers && <Users users={users}/>}
			</div>
		);
	}
}
