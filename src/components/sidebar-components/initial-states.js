import React from 'react';

export default (props) => {
	const colors = props.colors;
	const styling = {backgroundColor: colors[0], border: `1px solid ${colors[3]}`};
	const drawPath = props.drawPath;
	let paths = [];
	for (let i = 0; i < drawPath.length; i++) {
		const path = <path key={i+props.title} d={drawPath[i]} stroke={colors[3]} strokeWidth="2" fill="none" />;
		paths.push(path);
	}
	return (
  	<div className="option button initial" title={props.title} onClick={ () => {props.onStateClick(props.title)}} style={styling}>
  		<svg viewBox="0 0 35 35">
            {paths}
        </ svg>
    </ div>
		);
}

