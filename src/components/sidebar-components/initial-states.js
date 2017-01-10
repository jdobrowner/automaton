import React from 'react';

export default (props) => {
	return (
  	<div className="option button" onClick={ () => {props.onStateClick(props.initial)} }>
      <p> {props.initial} </p>
    </div>
		);
}

