import React from 'react';
import Position from './Position.js';
import Picture from './Picture.js';
import Info from './Info.js';
import Name from './Name.js';
import Votes from './Votes.js';
import Percentage from './Percentage.js';

export default function Candidate({ candidate, position }) {
	const { id, name, votes, percentage } = candidate;
	const imageSource = `${id}.jpg`;
	return (
		<div>
			<Position>{position}</Position>
			<Picture imageSource={imageSource} description={`imagem de ${name}`} />
			<Info>
				<Name>{name}</Name>
				<Votes>{votes}</Votes>
				<Percentage>{percentage}</Percentage>
			</Info>
		</div>
	);
}
