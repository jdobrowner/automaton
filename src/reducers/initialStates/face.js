import { size } from '../../constants';

export default () => {
  let state = {};

  for (let m = 0; m < size; m++) {
		for (let n = 0; n < size; n++) {

			const keyDown = `${n}-${m}`;
			const keyUp = `${n}+${m}`;

			state[keyDown] = 0;
			state[keyUp] = 0;

	const a = 21;
	const b = 22;
	const c = 42;
	const d = 43;
	const e = 16;
	const f = 17;

	//eyes
	if ((n === a) && (m === e)) state[keyUp] = 3;
	if ((n === b) && (m === e)) state[keyDown] = 3;
    if ((n === b) && (m === e)) state[keyUp] = 3;
    if ((n === a) && (m === f)) state[keyDown] = 3;
    if ((n === b) && (m === f)) state[keyUp] = 3;
    if ((n === b) && (m === f)) state[keyDown] = 3;

    if ((n === c) && (m === e)) state[keyUp] = 3;
    if ((n === d) && (m === e)) state[keyDown] = 3;
    if ((n === d) && (m === e)) state[keyUp] = 3;
    if ((n === c) && (m === f)) state[keyDown] = 3;
    if ((n === d) && (m === f)) state[keyUp] = 3;
    if ((n === d) && (m === f)) state[keyDown] = 3;


	// if ((n === 29) && (m === 30)) state[keyUp] = 3;
	// if ((n === 30) && (m === 30)) state[keyDown] = 3;
 //    if ((n === 30) && (m === 30)) state[keyUp] = 3;
 //    if ((n === 29) && (m === 31)) state[keyDown] = 3;
 //    if ((n === 30) && (m === 31)) state[keyUp] = 3;
 //    if ((n === 30) && (m === 31)) state[keyDown] = 3;

 //    if ((n === 49) && (m === 30)) state[keyUp] = 3;
 //    if ((n === 50) && (m === 30)) state[keyDown] = 3;
 //    if ((n === 50) && (m === 30)) state[keyUp] = 3;
 //    if ((n === 49) && (m === 31)) state[keyDown] = 3;
 //    if ((n === 50) && (m === 31)) state[keyUp] = 3;
 //    if ((n === 50) && (m === 31)) state[keyDown] = 3;
	
	//smile  
	for (var i = 20; i < 40; i++) {
		if ((n === i) && (m === 40)) state[keyDown] = 3;
		if ((n === i) && (m === 40)) state[keyUp] = 3;
		if ((n === 40) && (m === 40)) state[keyDown] = 3;
	}
		}
	}
  return state;
}
