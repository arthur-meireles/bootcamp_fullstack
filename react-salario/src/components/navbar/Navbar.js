import React, { Component } from 'react';
import { Box, Header, Heading } from 'grommet';
import { Currency } from 'grommet-icons';

export default class Navbar extends Component {
	render() {
		return (
			<Box>
				<Header background="brand" width="full">
					<Currency size="large" />
					<Heading>React Salary</Heading>
				</Header>
			</Box>
		);
	}
}
