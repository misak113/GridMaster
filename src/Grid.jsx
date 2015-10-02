
import * as React from 'react';
import {Component} from 'react';

class Grid extends Component {

	constructor() {
		super();
		this.base = 10;
	}

	render() {
		var cells = [];
		for (var row = 0;row < this.props.height;row++) {
			for (var column = 0;column < this.props.width;column++) {
				cells.push(
					<div className="cell"
						style={{
							left: this.base * column,
							top: this.base * row,
							width: this.base,
							height: this.base,
						}}/>
				);
			}
		}
		return <div className="grid">{cells}</div>;
	}

}
export default Grid;
