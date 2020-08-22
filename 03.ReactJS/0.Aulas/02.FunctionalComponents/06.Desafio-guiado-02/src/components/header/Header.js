import React from 'react';
import { FormInput } from 'shards-react';
import { formatNumber } from '../../helpers/formatHelper';
import css from './header.module.css';

export default function Header(props) {
	const { filter, countryCount, totalPopulation, onChangeFilter } = props;

	const handleInputChange = event => {
		const newText = event.target.value;
		onChangeFilter(newText);
	};

	return (
		<div>
			<h1 className={css.header}>React Countries</h1>
			<FormInput
				type="text"
				value={filter}
				onChange={handleInputChange}
				placeholder="Digite aqui..."
			/>
			<div className={css.header}>
				<span>
					Países: <strong>{countryCount}</strong>
				</span>
				&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
				<span>
					População: <strong>{formatNumber(totalPopulation)}</strong>
				</span>
			</div>
		</div>
	);
}
