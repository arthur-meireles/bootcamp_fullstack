import React, { Component, Fragment } from 'react';
import Counter from './components/Counter/Counter';
import Counter2 from './components/Counter/Counter2';
import Band from './components/Bands/Bands';
export default class App extends Component {
	constructor() {
		super();

		this.state = {
			currentCounter: 3,
			steps: 1,
		};
	}

	handleCount = type => {
		let { currentCounter, steps } = this.state;
		this.setState({
			currentCounter: type === '+' ? currentCounter + 1 : currentCounter - 1,
			steps: steps + 1,
		});
	};

	render() {
		const { currentCounter, steps } = this.state;
		return (
			<Fragment>
				<div className="Band">
					<h3>Band</h3>
					<Band />
				</div>

				<div className="Counter">
					{/* 
            COMPONENTE COM ESTADO ISOLADO
        */}
					<h3>Counter 1</h3>
					<Counter />
					<Counter />
					<Counter />
				</div>

				<div className="Counter 2">
					{/* 
            COMPONENTE COM ESTADO COMPARTILHADO
        */}
					<h3>Counter 2</h3>
					<Counter2
						onCount={this.handleCount}
						countValue={currentCounter}
						step={steps}
					/>
					<Counter2
						onCount={this.handleCount}
						countValue={currentCounter}
						step={steps}
					/>
					<Counter2
						onCount={this.handleCount}
						countValue={currentCounter}
						step={steps}
					/>
				</div>
			</Fragment>
		);
	}
}
