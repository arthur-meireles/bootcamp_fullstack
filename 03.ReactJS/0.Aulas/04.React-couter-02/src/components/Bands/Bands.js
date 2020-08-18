import React, { Component } from 'react';

export default class Bands extends Component {
	constructor() {
		super();

		const members = [
			{
				id: 1,
				name: 'Neil Peart',
				instrument: 'Bateria',
			},
			{
				id: 2,
				name: 'Alex Liferson',
				instrument: 'Guitar',
			},
			{
				id: 3,
				name: 'Geddy Lee',
				instrument: 'Bass',
			},
		];
		this.state = {
			bandName: 'Rush',
			bandMembers: members,
		};
	}

	render() {
		const { bandName, bandMembers } = this.state;
		return (
			<div>
				<h5>{bandName}</h5>
				<ul>
					{bandMembers.map(({ id, name, instrument }) => {
						return (
							<li key={id}>
								{name} - {instrument}
							</li>
						);
					})}
				</ul>
			</div>
		);
	}
}
