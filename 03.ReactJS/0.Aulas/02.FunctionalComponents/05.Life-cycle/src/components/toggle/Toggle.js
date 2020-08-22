import React from 'react';
import 'shards-ui/dist/css/shards.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { FormCheckbox } from 'shards-react';

export default function Toggle(props) {
	const { enabled, onToggle, description } = props;

	const handleChange = () => {
		onToggle(enabled);
	};

	return (
		<div>
			{description}
			<FormCheckbox
				toggle
				checked={enabled}
				onChange={handleChange}
			></FormCheckbox>
		</div>
	);
}
