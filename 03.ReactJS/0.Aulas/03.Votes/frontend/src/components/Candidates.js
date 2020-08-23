import React from 'react';
import Card from './Card.js';
import Candidate from './Candidate.js';

export default function Candidates({ candidates }) {
	return (
		<div>
			{candidates.map((candidate, index) => {
				const { id } = candidate;
				return (
					<Card id={id}>
						<Candidate candidate={candidate} position={index + 1}/>
					</Card>
				);
			})}
		</div>
	);
}
