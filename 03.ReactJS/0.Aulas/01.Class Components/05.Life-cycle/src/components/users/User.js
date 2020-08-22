import React, { Component } from 'react';
import {flexRow, avatar} from './user.module.css';

export default class User extends Component {
	render() {
        const {login, name, picture} = this.props.user;
		return (
			<div className={flexRow}>
                <img className={avatar} src={picture.large} alt={name.first}></img>
				<span>{name.first}</span>
			</div>
		);
	}
}
