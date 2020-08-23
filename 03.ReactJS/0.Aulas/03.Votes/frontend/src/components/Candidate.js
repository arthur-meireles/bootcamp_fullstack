import React from 'react';
import Position from './Position.js';

export default function Candidate({ candidate, position }) {
	const { name, votes } = candidate;
	return (
		<div>
            <Position>{position}</Position>
			{name} [{votes}]
		</div>
	);
}
