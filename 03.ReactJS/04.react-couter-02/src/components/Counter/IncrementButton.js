import React, { Component } from 'react';

export default class IncrementeButton extends Component {

    handleButton = () => {
        this.props.onIncrement('+');
    }

	render() {
		return (
			<button
				onClick={this.handleButton}
				className="waves-effect waves-light btn green darken-2"
			>
				+
			</button>
		);
	}
}
