import React, { Component } from 'react';
import { ListGroupItem } from 'shards-react';
import css from './country.module.css';

export default class Country extends Component {
	render() {
		const { country } = this.props;
		const { name, flag } = country;
		return (
			<ListGroupItem className={css.list}>
				<img className={css.img} src={flag} alt={name} />
				{name}
			</ListGroupItem>
		);
	}
}
