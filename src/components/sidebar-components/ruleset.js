import React from 'react';

export default (props) => {
	const colors = props.colors;
	const styling = {backgroundColor: colors[0], border: `1px solid ${colors[3]}`};
	return (
  	<div className="ruleset button" onClick={ () => {props.onRulesetClick(props.title)}} style={styling}>
      <p> {props.title} </p>
    </div>
		);
}
