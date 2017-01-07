import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import CellDown from './cell-down';
import CellUp from './cell-up';
import cycle from '../actions/cycle';
import { size } from '../constants';

class Grid extends Component {
	constructor() {
		super();
		this.generateGrid = this.generateGrid.bind(this);
		this.tick = this.tick.bind(this);
		// this.setPatternState = this.setPatternState.bind(this);
	}
	// setPatternState() {
	// 	this.setState({ cells: this.generateGrid() });
	// }
	generateGrid() {
		let cells = [];
		const grid = this.props.pattern;

		for (let m = 0; m < size; m++) {
			for (let n = 0; n < size; n++) {
				const keyDown = `${n}-${m}`;
				const keyUp = `${n}+${m}`;
				cells.push( <CellDown n={n} m={m} key={keyDown} colorState={grid[keyDown]} /> );
				cells.push( <CellUp n={n} m={m} key={keyUp} colorState={grid[keyUp]} /> );
			}
		}
		return cells;
	}
	tick() {
    this.props.cycle();

		const newCells = [];
		this.state.cells.forEach((child) => {
			const newColor = this.props.pattern[child.key];
			newCells.push(React.cloneElement(child, { colorState: newColor }));
		});
		this.setState({cells: newCells})
  }
	componentWillMount() {
		this.setState({ cells: this.generateGrid() });
	}
	componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
  }
	componentWillUnmount() {
    clearInterval(this.interval);
  }
	render() {
		return (
		<svg className="grid"
				version="1.1"
		      	baseProfile="full"
		        width="1145" height="983"
		        xmlns="http://www.w3.org/2000/svg">

		        {this.state.cells}
		</svg>
	)
	}
}

function mapStateToProps(state) {
  return { pattern: state.pattern };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ cycle: cycle }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Grid);
