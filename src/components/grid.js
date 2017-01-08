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
		this.state = { paused: false };
		this.generateGrid = this.generateGrid.bind(this);
		this.tick = this.tick.bind(this);
		this.onGridClick = this.onGridClick.bind(this);
	}
	onGridClick() {
		const isPaused = !this.state.paused;
		if (isPaused) {
			clearInterval(this.interval);
		}
		else {
			this.interval = setInterval(this.tick, 300);
		}
		this.setState({ paused: isPaused });
	}
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
		if (!this.state.paused) {
			this.props.cycle();

			const newCells = [];
			const oldCells = this.state.cells;
			const length = oldCells.length;
			for (let i = 0; i < length; i++) {
				const newColor = this.props.pattern[oldCells[i].key];
				newCells.push(React.cloneElement(oldCells[i], { colorState: newColor }));
			}
			this.setState({cells: newCells});
		}
  }
	componentWillMount() {
		this.setState({ cells: this.generateGrid() });
	}
	componentDidMount() {
    this.interval = setInterval(this.tick, 100);
  }
	componentWillUnmount() {
    clearInterval(this.interval);
  }
	render() {
		return (
		<svg className="grid" onClick={this.onGridClick}
				version="1.1"
		      	baseProfile="full"
		        width="980" height="832"
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
