import React from 'react';
import Country from './Country';
import { ListGroup } from 'shards-react';
import css from './country.module.css';

export default function Countries({ countries }) {
	return (
		<div>
			<ul>
				{countries.map(country => {
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
