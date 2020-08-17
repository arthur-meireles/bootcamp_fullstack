import React, { Component } from 'react';
import Country from './Country';
import { ListGroup } from "shards-react";

export default class Countries extends Component {
	render() {
		const { countries } = this.props;
		return (
			<div>
				<ul>
					{countries.map((country) => {
						return (
							<ListGroup key={country.id}>
								<Country country={country} />
							</ListGroup>
						);
					})}
				</ul>
                
			</div>
		);
	}
}
