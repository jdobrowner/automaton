import React from 'react';

export default (props) => {
	return (
  	<div className="option button initial" onClick={ () => {props.onRulesetClick(props.title)} }>
      <p> {props.title} </p>
    </div>
		);
}
