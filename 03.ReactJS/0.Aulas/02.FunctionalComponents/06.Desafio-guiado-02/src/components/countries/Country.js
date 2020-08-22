import React from 'react';
import { ListGroupItem } from 'shards-react';
import css from './country.module.css';

export default function Country ({country}) {
		const { name, flag } = country;
		return (
			<ListGroupItem className={css.list}>
				<img className={css.img} src={flag} alt={name} />
				{name}
			</ListGroupItem>
		);

}
