import React, { Component } from 'react';
import { Grommet, Box } from 'grommet';
import mainTheme from './themes/mainTheme.js';
import AppBar from './components/Appbar/AppBar';
import Inputs from './components/Input/Inputs.js';

export default class App extends Component {
	constructor() {
		super();

		this.state = {
			salary: 0,
		};
	}

	render() {
		return(
		<Grommet theme={mainTheme} full>
			<Box fill>
				<AppBar />
				<Box direction="row" flex overflow={{ horizontal: 'hidden' }}>
					<Box flex align="stretch" margin="10px">
						<Inputs />
					</Box>
				</Box>
			</Box>
		</Grommet>
		)
	}
}
