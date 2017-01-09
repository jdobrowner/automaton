import { size } from '../../constants';

export default () => {
  let state = {};

  for (let m = 0; m < size; m++) {
		for (let n = 0; n < size; n++) {

			const keyDown = `${n}-${m}`;
			const keyUp = `${n}+${m}`;

			state[keyDown] = 0;
			state[keyUp] = 0;

		}
	}

const midpoint = size/2 - 2;

  for (let m = midpoint; m < midpoint+6; m++) {
      
      let n = midpoint;

      const keyDown = `${n}-${m}`;   
      state[keyDown] = 3;     

      if ((n === midpoint) && (m === midpoint)) state[keyDown] = 0;

      if ((n === midpoint) && (m === midpoint+4)) state[keyDown] = 0;
      

      const keyUp = `${n}+${m}`;   
      state[keyUp] = 3;  

      if ((n === midpoint) && (m === midpoint+3)) state[keyUp] = 0;
      if ((n === midpoint-1) && (m === midpoint+3)) state[keyUp] = 3;
  } 
  state[`${midpoint+1}-${midpoint}`] = 2;
  state[`${midpoint+1}-${midpoint+4}`] = 2;

// if ((n === midpoint+1) && (m === midpoint)) state[keyDown] = 2;
// if ((n === midpoint+1) && (m === midpoint+4)) state[keyDown] = 2;
  return state;
}
