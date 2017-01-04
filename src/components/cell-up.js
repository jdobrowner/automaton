import React, { Component } from 'react';

// export default class Cell extends Component {
// 	constructor() {
// 		super();
// 	}
// 	render() {
// 		const n = parseInt(this.props.n);
// 		const m = parseInt(this.props.m);
// 		console.log(this.props);
// 		return <polygon points={getPoints(n, m)} stroke="black" strokeWidth="1" fill="none" />
// 	}


// }

export default (props) => {
	const cellState = props.boolState ? 'cell colored' : 'cell';
	return <polygon points={getPointsUpTriangle(props.n, props.m)} className={cellState} stroke="black" strokeWidth="1" />
}


function getPointsUpTriangle(n, m) {
	const unit = 30;
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
