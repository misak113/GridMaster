
import React from 'react';
import {Component} from 'react';
import ClickStore from './ClickStore';

class MyButton extends Component {

	constructor() {
		super();
		this.state = {};
	}

	componentDidMount() {
		ClickStore.get().bindRerenderIsStarted(() => this.setState({ disabled: true }));
		ClickStore.get().bindRerenderIsDone(() => this.setState({ disabled: false }));
	}

	loadData() {
		/*var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
			if (xhttp.readyState == 4 && xhttp.status == 200) {
				this.setState({ bonamiHtml: xhttp.responseText });
			}
		};
		xhttp.open("GET", "http://beta.json-generator.com/api/tags", true);
		xhttp.setRequestHeader('Access-Control-Allow-Origin', 'true');
		xhttp.send();*/
		setTimeout(() => ClickStore.get().dispatchWidth(Math.round(Math.random() * 40)), 1000);
	}
	
	render() {
		return <button disabled={this.state.disabled}
			onClick={() => this.loadData()}
			style={{ float: 'right' }}>Can you see me?</button>
	}	
}
export default MyButton;
