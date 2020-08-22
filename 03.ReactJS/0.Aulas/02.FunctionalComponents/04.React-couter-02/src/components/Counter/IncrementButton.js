import React from 'react';

export default function IncrementeButton(props) {
	const { onIncrement } = props;
	const handleButton = () => {
		onIncrement('+');
	};

	return (
		<button
			onClick={handleButton}
			className="waves-effect waves-light btn green darken-2"
		>
			+
		</button>
	);
}
