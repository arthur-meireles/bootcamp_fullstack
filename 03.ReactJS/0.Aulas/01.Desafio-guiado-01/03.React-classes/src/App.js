import React, { Component } from 'react';
import ProjetoBase from './components/ProjetoBase/ProjetoBase';
import { getNewTimestamp } from './helpers/dateTimeHelpers';

export default class App extends Component {
	constructor() {
		super();

		this.state = {
			clickArray: [],
		};
	}

	handleClick = () => {
		const newClickArray = Object.assign([], this.state.clickArray);
		newClickArray.push(getNewTimestamp());
		this.setState({ clickArray: newClickArray });
	};

	render() {
		const { clickArray } = this.state;
		return (
			<div>
				<h1>
					React e <em>Classe Components</em>
				</h1>
				<button onClick={this.handleClick}>Click me</button>
				<br />
				<ul>
					{clickArray.map(item => {
						return <li key={item}>{item}</li>;
					})}
				</ul>
			</div>
		);
	}
}
