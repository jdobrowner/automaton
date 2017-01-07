import React, { Component } from 'react';
import { unit } from '../constants';
import colors from '../colors';

export default class Cell extends Component {
	constructor() {
		super();
	}
	shouldComponentUpdate(nextProps, nextState) {
		return !(nextProps.colorState === this.props.colorState);
	}
	render() {
		console.log(this.props.n);
		const n = this.props.n;
		const m = this.props.m;
		const cellState = getColor(this.props.colorState);
		return <polygon points={getPointsUpTriangle(n, m)} fill={cellState} />
	}
}

function getColor(n = 0) {
	return colors.green[n];
}

function getPointsUpTriangle(n, m) {
	const y = Math.sqrt(3)/2;

	let [ Lx, Ly, Tx, Ty, Rx, Ry ] = [ (n+0.5)*unit, (m+1)*y*unit, (n+1)*unit, y*m*unit, (n+1.5)*unit, (m+1)*y*unit ];

	if ( m % 2 === 1) {
		const shift = 0.5*unit;
		Lx -= shift;
		Tx -= shift;
		Rx -= shift;
	}

	return `${Lx} ${Ly}, ${Tx} ${Ty}, ${Rx} ${Ry}`;
}
