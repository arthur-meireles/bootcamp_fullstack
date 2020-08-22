import React, { Component } from 'react';
import css from './counter.module.css';
import IncrementButton from './IncrementButton';
import DecrementButton from './DecrementButton';
import Value from './Value';
import Steps from './Steps';

export default function Counter(props) {
	const { onCount } = props;

	const handleClick = clickType => {
		onCount(clickType);
	};
	const { countValue, step } = props;
	return (
		<div className={css.counterContainer}>
			<DecrementButton onDecrement={handleClick} />
			<Value value={countValue} />
			<IncrementButton onIncrement={handleClick} />
			<Steps steps={step} />
		</div>
	);
}
