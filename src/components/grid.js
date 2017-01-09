import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import CellDown from './cell-down';
import CellUp from './cell-up';
import cycle from '../actions/cycle';
import pause from '../actions/pause';
import { size } from '../constants';

class Grid extends Component {
	constructor() {
		super();
		// this.state = { speed: 600 };
		this.generateGrid = this.generateGrid.bind(this);
		this.tick = this.tick.bind(this);
		this.onGridClick = this.onGridClick.bind(this);
		this.updateCells = this.updateCells.bind(this);
	}
	onGridClick() {
		const isPaused = !this.props.paused;
		if (isPaused) {
			clearInterval(this.interval);
		}
		else {
			this.interval = setInterval(this.tick, this.props.speed);
		}
		this.props.pause();
	}
	generateGrid() {
		let cells = [];
		const grid = this.props.pattern;
		const colors = this.props.colors;

		for (let m = 0; m < size; m++) {
			for (let n = 0; n < size; n++) {
				const keyDown = `${n}-${m}`;
				const keyUp = `${n}+${m}`;
				cells.push( <CellDown n={n} m={m} key={keyDown} colorState={grid[keyDown]} colorPallet={colors} /> );
				cells.push( <CellUp n={n} m={m} key={keyUp} colorState={grid[keyUp]} colorPallet={colors} /> );
			}
		}
		return cells;
	}
	tick() {
		if (!this.props.paused) {
			this.props.cycle();
			this.updateCells(this.props.colors);
  	}
	}
	updateCells(colorPallet) {
		const newCells = [];
		const oldCells = this.state.cells;
		const length = oldCells.length;
		for (let i = 0; i < length; i++) {
			const newColor = this.props.pattern[oldCells[i].key];
			newCells.push(React.cloneElement(oldCells[i], { colorState: newColor, colorPallet: colorPallet }));
		}
		this.setState({cells: newCells});
	}
	componentWillReceiveProps(nextProps) {
		if (nextProps.colors !== this.props.colors) {
			this.updateCells(nextProps.colors);
		}
		// update the speed of tick cycle when speed controls change
		if (nextProps.speed !== this.props.speed) {
			clearInterval(this.interval);
			this.interval = setInterval(this.tick, nextProps.speed);
		}
	}
	componentWillMount() {
		this.setState({ cells: this.generateGrid() });
	}
	componentDidMount() {
		const speed = this.props.speed;
		this.setState({ speed: speed })
		setTimeout( () => { this.interval = setInterval(this.tick, speed) }, 200);
  }
	componentWillUnmount() {
    clearInterval(this.interval);
  }
	render() {
		return (
		<svg className="grid" onMouseDown={this.onGridClick}
				version="1.1"
		      	baseProfile="full"
		        width="970" height="832"
		        xmlns="http://www.w3.org/2000/svg">

		        {this.state.cells}
		</svg>
	)
	}
}

function mapStateToProps(state) {
  return {
						pattern: state.pattern,
						speed: state.speed,
						paused: state.paused,
						colors: state.colors
	 				};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ cycle: cycle, pause: pause }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Grid);
