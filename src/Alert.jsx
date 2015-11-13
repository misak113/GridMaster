
import React from 'react';
import {Component} from 'react';
import ClickStore from './ClickStore';

class Alert extends React.Component {

	componentWillMount() {
		ClickStore.get().bindReachCounter(() => {
			alert('Five clicks');
		});
	}
	
	render() {
		return null;
	}
}
export default Alert;
