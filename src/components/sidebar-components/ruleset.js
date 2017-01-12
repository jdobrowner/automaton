import React from 'react';

export default (props) => {
	const colors = props.colors;
	const regularStyling = {backgroundColor: colors[0]};
	const selectedStyling = {backgroundColor: colors[2], color: colors[0]};
	const styling = props.isSelected(props.title) ? selectedStyling : regularStyling;
	return (
  	<div className="ruleset button" onClick={ () => {props.onRulesetClick(props.title)}} style={styling}>
      <p> {props.title} </p>
    </div>
		);
}
