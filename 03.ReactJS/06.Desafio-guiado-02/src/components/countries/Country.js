import React, { Component } from 'react';
import { ListGroupItem } from 'shards-react';

export default class Country extends Component {
	render() {
		const { country } = this.props;
		return <ListGroupItem>{country.name}</ListGroupItem>;
	}
}
