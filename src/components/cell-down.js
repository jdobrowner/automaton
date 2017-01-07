import React, { Component } from 'react';
import { unit } from '../constants';

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
		return <polygon points={getPointsDownTriangle(n, m)} fill={cellState} />
	}
}

// export default (props) => {
// 	const cellState = getColor(props.colorState);
// 	return <polygon className="cell" points={getPointsDownTriangle(props.n, props.m)} fill={cellState} />
// }

function getColor(n) {
	switch (n) {
		case 0: return '#F3FBF1';
		case 1: return '#D1E4D1';
		case 2: return '#98B4A6';
		case 3: return '#64868E';
		default: return '#F3FBF1';
	}
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
