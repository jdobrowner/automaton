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
	return <polygon points={getPointsDownTriangle(props.n, props.m)} stroke="black" strokeWidth="1" fill="none" />
}


function getPointsDownTriangle(n, m) {
	const unit = 30;
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

