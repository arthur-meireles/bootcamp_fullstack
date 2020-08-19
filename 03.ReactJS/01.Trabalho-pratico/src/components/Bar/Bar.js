import React, { Component } from 'react';

export default class Bar extends Component {
	render() {
		const { value, color = '#7d4cdb' } = this.props;

		return (
			<div
				style={{
					marginTop: '40px',
					width: value + '%',
					height: '30px',
					backgroundColor: color,
				}}
			/>
		);
	}
}
