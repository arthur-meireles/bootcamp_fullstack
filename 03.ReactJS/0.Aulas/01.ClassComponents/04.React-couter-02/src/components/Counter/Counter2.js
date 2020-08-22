import React, { Component } from 'react';
import css from './counter.module.css';
import IncrementButton from './IncrementButton';
import DecrementButton from './DecrementButton';
import Value from './Value';
import Steps from './Steps';

export default class Counter extends Component {
handleClick = (clickType) => {
	this.props.onCount(clickType)
}

	render() {
		const {countValue, step} = this.props;
		return (
			<div className={css.counterContainer}>
				<DecrementButton onDecrement={this.handleClick} />
				<Value value={countValue} />
				<IncrementButton onIncrement={this.handleClick} />
				<Steps steps={step} />
			</div>
		);
	}
}
