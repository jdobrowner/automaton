import { size } from '../../constants';

export default () => {
  let state = {};

  for (let m = 0; m < size; m++) {
		for (let n = 0; n < size; n++) {

			const keyDown = `${n}-${m}`;
			const keyUp = `${n}+${m}`;

			state[keyDown] = 0;
			state[keyUp] = 0;

	const a = size/2;
	const b = size/2-1;
	const e = size/2-1;
	const f = size/2;

	if ((n === a) && (m === e)) state[keyUp] = 2;
  	if ((n === b) && (m === e)) state[keyDown] = 3;
      if ((n === b) && (m === e)) state[keyUp] = 1;
      if ((n === a) && (m === f)) state[keyDown] = 1;
      if ((n === b) && (m === f)) state[keyUp] = 3;
      if ((n === b) && (m === f)) state[keyDown] = 2;

  	}
  }
  return state;
}
