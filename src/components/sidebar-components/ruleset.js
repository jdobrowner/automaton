import React from 'react';

export default (props) => {
	return (
  	<div className="ruleset option button" onClick={ () => {props.onRulesetClick(props.title)} }>
      <p> {props.title} </p>
    </div>
		);
}
