import React from 'react';
import Position from './Position.js';
import Picture from './Picture.js';
import Info from './Info.js';
import Name from './Name.js';
import Votes from './Votes.js';
import Percentage from './Percentage.js';
import Popularity from './Popularity.js';
import css from './candidate.module.css';
import { formatNumber, formatPercentage } from '../helpers/formatHelper.js';

export default function Candidate({ candidate, position }) {
	const { id, name, votes, percentage, popularity } = candidate;
	const imageSource = `${id}.jpg`;
	return (
		<div className={css.flexRow}>
			<Position>{position}</Position>
			<Picture imageSource={imageSource} description={`imagem de ${name}`} />
			<Info>
				<Name>{name}</Name>
				<Votes>{formatNumber(votes)}</Votes>
				<Percentage>{formatPercentage(percentage)}</Percentage>
				<Popularity value={popularity} />
			</Info>
		</div>
	);
}
