import React, { Component } from 'react';
import { Grommet, Box } from 'grommet';
import mainTheme from './themes/mainTheme.js';
import AppBar from './components/Appbar/AppBar';
import Inputs from './components/Input/Inputs.js';
import { calculateSalaryFrom } from './helpers/salaryHelper.js';

export default class App extends Component {
	constructor() {
		super();
		
		this.state = {
			fullSalary: 0,
			calculations: [],
		};
	}
	handleInputChange = fullSalary => {
		let calculate = calculateSalaryFrom(fullSalary);
		this.setState({
			fullSalary,
			calculations: calculate,
		});
	};

	render() {
		const { fullSalary, calculations } = this.state;
		return (
			<Grommet theme={mainTheme} full>
				<Box fill>
					<AppBar />
					<Box direction="row" flex>
						<Box flex align="stretch" margin="10px">
							<Inputs
								onChange={this.handleInputChange}
								salary={fullSalary}
								calculations={calculations}
							/>
						</Box>
					</Box>
				</Box>
			</Grommet>
		);
	}
}
