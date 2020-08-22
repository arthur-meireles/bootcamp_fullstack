import React, { Component } from 'react'
import css from './counter.module.css';

export default class steps extends Component {
    render() {
        return (
            <div>
                <span className={css.counterValue}>({this.props.steps})</span>
            </div>
        )
    }
}
