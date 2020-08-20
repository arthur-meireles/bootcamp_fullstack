import React, { Component } from 'react';

export default class Bar extends Component {
	render() {
		const { value=0, text='', color = '#16a085', border = '2' } = this.props;

		return (
			<div
				style={{
					marginTop: '40px',
					width: value + '%',
					height: '30px',
					backgroundColor: color,
					borderRadius: border + 'px',
				}}
			>
				<a
					style={{
						color: 'white',
						marginLeft: '5px',
					}}
				>
					<strong>{text}</strong>
				</a>
			</div>
		);
	}
}
