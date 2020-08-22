import React from 'react';

export default function DecrementeButton(props) {
	const { onDecrement } = props;

	const handleButton = () => {
		onDecrement('-');
	};

	return (
		<button
			onClick={handleButton}
			className="waves-effect waves-light btn red darken-2"
		>
			-
		</button>
	);
}
