import React, { Component } from 'react';
import 'shards-ui/dist/css/shards.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { FormCheckbox } from 'shards-react';

export default class Toggle extends Component {
	handleChange = () => {
		const { enabled, onToggle } = this.props;
		onToggle(enabled);
	};

	render() {
		const { enabled, description } = this.props;
		return (
			<div>
				{description}
				<FormCheckbox
					toggle
					checked={enabled}
					onChange={this.handleChange}
				></FormCheckbox>
			</div>
		);
	}
}
