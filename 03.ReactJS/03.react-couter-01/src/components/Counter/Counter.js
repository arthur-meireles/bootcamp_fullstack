import React, { Component } from 'react';
import css from './counter.module.css';

export default class Counter extends Component {
	constructor() {
		super();

		this.currentCounter = 2;
	}

    handleClick = () => {
        console.log('click')
       this.currentCounter = this.currentCounter - 1;
    }

	render() {
		return (
			<div className={css.counterContainer}>
				<button
					onClick={this.handleClick}
					className="waves-effect waves-light btn red darken-2"
				>
					-
				</button>
				<span className={css.counterValue}>{this.currentCounter}</span>
				<button className="waves-effect waves-light btn green darken-2">
					+
				</button>
			</div>
		);
	}
}
