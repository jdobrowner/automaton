import { size } from '../../constants';

export default () => {
  let state = {};

  for (let m = 0; m < size; m++) {
		for (let n = 0; n < size; n++) {

			const keyDown = `${n}-${m}`;
			const keyUp = `${n}+${m}`;

			state[keyDown] = 0;
			state[keyUp] = 0;

        if (n === 0) state[keyDown] = 3;
        if (n === 0) state[keyUp] = 3;

        if (n === size-1) state[keyDown] = 3;
        if (n === size-1) state[keyUp] = 3;

      	if (m === 0) state[keyDown] = 1;
      	if (m === 0) state[keyUp] = 1;

      	if (m === size-1) state[keyDown] = 1;
      	if (m === size-1) state[keyUp] = 1;	
		}
	}
  return state;
}


