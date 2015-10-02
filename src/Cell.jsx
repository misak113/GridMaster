
import React from 'react';
import {Component} from 'react';
import ClickStore from './ClickStore';

class Cell extends Component {

	constructor() {
		super();
		this.state = {
			selected: false
		};
	}

	clickCell(ev) {
		ClickStore.get().dispatchSelectedPoint(this.props.column, this.props.row);
		this.setState({ selected: !this.state.selected });
	}
	
	render() {
		return (
			<div className="cell"
				onClick={(ev) => this.clickCell(ev)}
				style={{
					backgroundColor: this.state.selected ? 'green' : null,
					left: this.props.base * this.props.column,
					top: this.props.base * this.props.row,
					width: this.props.base,
					height: this.props.base,
				}}/>
		);
	}
}
export default Cell;
