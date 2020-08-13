import React, { Component } from 'react';
import css from './counter.module.css';
import IncrementButton from './IncrementButton';
import DecrementButton from './DecrementButton';
import Value from './Value';
import Steps from './Steps';

export default class Counter extends Component {
	constructor() {
		super();

		this.state = {
			currentCounter: 0,
			steps: 0,
		};
	}

	handleButtonDown = () => {
		let { currentCounter, steps } = this.state;
		this.setState({
			currentCounter: currentCounter - 1,
			steps: steps + 1,
		});
	};

	handleButton = clickType => {
		let { currentCounter, steps } = this.state;
		this.setState({
			currentCounter:
				clickType === '+' ? currentCounter + 1 : currentCounter - 1,
			steps: steps + 1,
		});
	};

	render() {
		const { currentCounter, steps } = this.state; // Melhora a referencia posteriormente

		return (
			<div className={css.counterContainer}>
				<DecrementButton onDecrement={this.handleButton} />
				<Value value={currentCounter} />
				<IncrementButton onIncrement={this.handleButton} />
				<Steps steps={steps}/>
			</div>
		);
	}
}
