import React, { Component } from 'react';
import { FormInput } from 'shards-react';
import { formatNumber } from '../../helpers/formatHelper';
import css from './header.module.css';

export default class Header extends Component {
	handleInputChange = event => {
		const newText = event.target.value;
		this.props.onChangeFilter(newText);
	};

	render() {
		const { filter, countryCount, totalPopulation } = this.props;
		return (
			<div>
				<h1 className={css.header}>React Countries</h1>
				<FormInput
					type="text"
					value={filter}
                    onChange={this.handleInputChange}
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
}
