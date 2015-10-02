
import React from 'react';
import {Component} from 'react';
import Cell from './Cell';
import ClickStore from './ClickStore';

class Grid extends Component {

	constructor() {
		super();
		this.base = 10;
		this.state = {
			selectedPoints: []
		};
	}

	componentWillMount() {
/*		ClickStore.get().bindSelectedPoint((x, y) => {
			var newSelectedPoints = JSON.parse(JSON.stringify(this.state.selectedPoints));
			if (true) {
				newSelectedPoints.push({
					x: x,
					y: y
				});
			} else {
				newSelectedPoints.splice(newSelectedPoints.indexOf());
			}
			this.setState({
				selectedPoints: newSelectedPoints
			});
		});*/
	}

	render() {
		var cells = [];
		for (var row = 0;row < this.props.height;row++) {
			for (var column = 0;column < this.props.width;column++) {
				cells.push(
					<Cell key={row + 'x' + column}
						base={this.base}
						column={column}
						row={row}/>
				);
			}
		}
		return <div className="grid">{cells}</div>;
	}
}
export default Grid;
