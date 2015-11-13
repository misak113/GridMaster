
import React from 'react';
import {Component} from 'react';
import Cell from './Cell';
import Alert from './Alert';
import ClickStore from './ClickStore';
import MyButton from './MyButton';

class Grid extends Component {

	constructor(props, context) {
		super(props, context);
		this.base = 10;
		this.state = {
			selectedPoints: [],
			width: this.props.width
		};
	}

	componentWillMount() {
		ClickStore.get().bindReachCounter(() => this.setState({ buttonIsShown: true }));
		ClickStore.get().bindWidth((width) => {
			ClickStore.get().dispatchRerenderIsStarted();
			this.setState({ width: width });
			setTimeout(() => {
				ClickStore.get().dispatchRerenderIsDone();
			}, 1000);
		});
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
			for (var column = 0;column < this.state.width;column++) {
				cells.push(
					<Cell key={row + 'x' + column}
						base={this.base}
						column={column}
						row={row}/>
				);
			}
		}
		return (
			<div className="grid">
				{this.state.buttonIsShown ? <MyButton/> : null}
				{cells}
				{/*<Alert/>*/}
			</div>
		);
	}
}
export default Grid;
