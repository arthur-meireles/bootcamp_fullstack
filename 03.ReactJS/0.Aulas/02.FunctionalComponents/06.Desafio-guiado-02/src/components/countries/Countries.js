import React, { Component } from 'react';
import Country from './Country';
import { ListGroup } from "shards-react";
import css from './country.module.css';

export default class Countries extends Component {
	render() {
		const { countries } = this.props;
		return (
			<div>
				<ul>
					{countries.map((country) => {
						return (
							<ListGroup className={css.container} key={country.id}>
								<Country country={country} />
							</ListGroup>
						);
					})}
				</ul>
                
			</div>
		);
	}
}
