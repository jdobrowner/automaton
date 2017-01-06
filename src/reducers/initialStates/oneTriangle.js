export default () => {
  let state = {};
  const size = 30;

  for (let m = 0; m < size; m++) {
		for (let n = 0; n < size; n++) {

			const keyDown = `${n}-${m}`;
			const keyUp = `${n}+${m}`;

			state[keyDown] = 0;
			state[keyUp] = 0;

      if ((n === 15) && (m === 14)) state[keyUp] = 3;
		}
	}
  return state;
}
