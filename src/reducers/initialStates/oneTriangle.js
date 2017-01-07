import { size } from '../../constants';

export default () => {
  let state = {};

  for (let m = 0; m < size; m++) {
		for (let n = 0; n < size; n++) {

			const keyDown = `${n}-${m}`;
			const keyUp = `${n}+${m}`;

			state[keyDown] = 0;
			state[keyUp] = 0;

      if ((n === 40) && (m === 40)) state[keyDown] = 3;
		}
	}
  return state;
}
