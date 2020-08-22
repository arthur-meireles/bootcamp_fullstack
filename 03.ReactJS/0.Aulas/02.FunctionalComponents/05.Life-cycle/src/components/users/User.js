import React from 'react';
import { flexRow, avatar } from './user.module.css';

export default function User({ user }) {
	const { name, picture } = user;
	
	return (
		<div className={flexRow}>
			<img className={avatar} src={picture.large} alt={name.first}></img>
			<span>{name.first}</span>
		</div>
	);
}
