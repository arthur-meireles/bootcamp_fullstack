import React, { Component } from 'react';
import { Box, Header, Heading } from 'grommet';
import Navbar from '../navbar/Navbar';

export default class App extends Component {
	render() {
		return (
			<Box
				direction="column"
				border={{ color: 'brand', size: 'large' }}
				height="full"
				responsive={true}
			>
				<Navbar />
			</Box>
		);
	}
}
