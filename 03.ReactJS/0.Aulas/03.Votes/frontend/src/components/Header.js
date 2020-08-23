import React from 'react';
import css from './header.module.css'

export default function Header({ children }) {
	return (
		<div className={css.header}>
			<h1>{children}</h1>
		</div>
	);
}
 