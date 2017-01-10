import React, { Component } from 'react';
import { unit } from '../constants';

export default class Cell extends Component {
	constructor() {
		super();
	}
	shouldComponentUpdate(nextProps, nextState) {
		return !(nextProps.colorState === this.props.colorState) || !(nextProps.colorPallet === this.props.colorPallet);
	}
	render() {
		const props = this.props;
		const n = props.n;
		const m = props.m;
		const colorPallet = props.colorPallet;
		const cellState = getColor(props.colorState, colorPallet);
		return <polygon points={getPointsUpTriangle(n, m)} fill={cellState} stroke={colorPallet[0]} strokeWidth='0.2' />
	}
}

function getColor(n = 0, colors) {
	return colors[n];
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
