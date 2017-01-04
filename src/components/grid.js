import React, { Component } from 'react';
import CellDown from './cell-down';
import CellUp from './cell-up';

export default class Grid extends Component {
	constructor() {
		super();
		this.generateGrid = this.generateGrid.bind(this);
	}
	generateGrid() {
		let cells = [];
		const size = 30;

		for (let m = 0; m < size; m++) {
			for (let n = 0; n < size; n++) {
				const keyDown = `${n}-${m}`;
				const keyUp = `${n}+${m}`;
				cells.push( <CellDown n={n} m={m} key={keyDown} /> );
				cells.push( <CellUp n={n} m={m} key={keyUp} /> );
			}
		}
		return cells;
	}
	render() {
		return (
		<svg className="grid"
				version="1.1"
		      	baseProfile="full"
		        width="1000" height="1000"
		        xmlns="http://www.w3.org/2000/svg">

		        {this.generateGrid()}
		</svg>
	)
	}
	
}


