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
		const n = this.props.n;
		const m = this.props.m;
		const cellState = getColor(this.props.colorState);
		return <polygon points={getPointsDownTriangle(n, m)} fill={cellState} stroke={colors.southwest[0]} strokeWidth='0.5'/>
	}
}

function getColor(n = 0) {
	return colors.southwest[n];
}

function getPointsDownTriangle(n, m) {
	const y = Math.sqrt(3)/2;

	let [ Lx, Ly, Bx, By, Rx, Ry ] = [ n*unit, y*m*unit, (n+0.5)*unit, y*(m+1)*unit, (n+1)*unit, y*m*unit ];

	if ( m % 2 === 1) {
			const shift = 0.5*unit;
			Lx += shift;
			Bx += shift;
			Rx += shift;
		}

	return `${Lx} ${Ly}, ${Bx} ${By}, ${Rx} ${Ry}`;
}
