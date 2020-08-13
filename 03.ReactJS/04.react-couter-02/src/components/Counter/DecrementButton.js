import React, { Component } from 'react';

export default class DecrementeButton extends Component {

    handleButton = () => {
        this.props.onDecrement('-');
    }

	render() {
		return (
			<button
				onClick={this.handleButton}
				className="waves-effect waves-light btn red darken-2"
			>
				-
			</button>
		);
	}
}
