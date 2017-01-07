import React, { Component } from 'react';
import { unit } from '../constants';

// export default class Cell extends Component {
// 	constructor() {
// 		super();
// 		this.onCellClicked = this.onCellClicked.bind(this);
// 	}
// 	onCellClicked() {
// 		console.log(this.props.ident);
// 	}
// 	render() {
// 		const n = this.props.n;
// 		const m = this.props.m;
// 		const cellState = getColor(this.props.colorState);
// 		return <polygon className="cell" points={getPointsUpTriangle(n, m)} fill={cellState} onClick={this.onCellClicked}/>
// 	}
// }

export default (props) => {
	const cellState = getColor(props.colorState);
	return <polygon className="cell" points={getPointsUpTriangle(props.n, props.m)} fill={cellState} />
}

function getColor(n) {
	switch (n) {
		case 0: return '#F3FBF1';
		case 1: return '#D1E4D1';
		case 2: return '#98B4A6';
		case 3: return '#64868E';
		default: return '#F3FBF1';
	}
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
