import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import './index.css';
import Users from './components/users/Users';
import './index.css';
import { FormCheckbox } from "shards-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"

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
		console.log('ComponentWillUnmount de app.js');
	}

	handleShowUsers = () => {
    const {showUsers} = this.state;;
		this.setState({ showUsers: !showUsers });
	};

	render() {
		const { showUsers, users } = this.state;
		return (
			<div>
        <div>
        <label>
          Show users: 
          <FormCheckbox
        toggle
        checked={showUsers}
        onChange={this.handleShowUsers}>
      </FormCheckbox>
        </label>
        </div>
				<hr />
				{showUsers && <Users users={users}/>}
			</div>
		);
	}
}
