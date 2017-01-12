import React from 'react';

export default (props) => {
	const colors = props.colors;
  const currentColors = props.currentColors;
	return (
		<div className="option button swatch" onClick={()=>{props.onColorClick(colors)}} style={{border: `1px solid ${currentColors[3]}`}}>
          <div>
            <div className="color-sample" style={{backgroundColor: colors[0]}}></div>
            <div className="color-sample" style={{backgroundColor: colors[1]}}></div>
          </div>
          <div>
            <div className="color-sample" style={{backgroundColor: colors[2]}}></div>
            <div className="color-sample" style={{backgroundColor: colors[3]}}></div>
          </div>
        </div>
		);
}
