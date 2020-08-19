import React, { Component } from 'react';
import { Box, Heading, Clock } from 'grommet';
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
				animation={{
					type: 'slideDown',
					delay: 0,
					duration: 1000,
					size: 'large',
				}}
			>
				<Money />
                <Heading level="3" margin={{left: '20px', right: '20px'}}>React Salary</Heading>
				<Clock type="digital" />
				
			</Box>
		);
	}
}
