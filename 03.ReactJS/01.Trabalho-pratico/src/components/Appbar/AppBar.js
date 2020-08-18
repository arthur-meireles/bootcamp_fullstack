import React, { Component } from 'react';
import { Box, Heading } from 'grommet';
import { Money } from 'grommet-icons';

export default class AppBar extends Component {
	render() {
		return (
			<Box
				tag="header"
				direction="row"
				align="center"
				background="brand"
				pad={{ left: 'medium', right: 'small', vertical: 'small' }}
				elevation="medium"
				style={{ zIndex: '1' }}
			>
				<Money />
                <Heading level="3" margin="small">React Salary</Heading>
			</Box>
		);
	}
}
