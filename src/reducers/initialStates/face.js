import { size } from '../../constants';

export default () => {
  let state = {};

  for (let m = 0; m < size; m++) {
		for (let n = 0; n < size; n++) {

			const keyDown = `${n}-${m}`;
			const keyUp = `${n}+${m}`;

			state[keyDown] = 0;
			state[keyUp] = 0;

	//eyes		
	if ((n === 29) && (m === 30)) state[keyUp] = 3;
	if ((n === 30) && (m === 30)) state[keyDown] = 3;
    if ((n === 30) && (m === 30)) state[keyUp] = 3;
    if ((n === 29) && (m === 31)) state[keyDown] = 3;
    if ((n === 30) && (m === 31)) state[keyUp] = 3;
    if ((n === 30) && (m === 31)) state[keyDown] = 3;

    if ((n === 49) && (m === 30)) state[keyUp] = 3;
    if ((n === 50) && (m === 30)) state[keyDown] = 3;
    if ((n === 50) && (m === 30)) state[keyUp] = 3;
    if ((n === 49) && (m === 31)) state[keyDown] = 3;
    if ((n === 50) && (m === 31)) state[keyUp] = 3;
    if ((n === 50) && (m === 31)) state[keyDown] = 3;
	
	//smile  
	if ((n === 35) && (m === 49)) state[keyDown] = 3;
	if ((n === 36) && (m === 49)) state[keyUp] = 3;

	if ((n === 36) && (m === 50)) state[keyDown] = 3;
 	if ((n === 36) && (m === 50)) state[keyUp] = 3;
	if ((n === 37) && (m === 50)) state[keyDown] = 3;
 	if ((n === 37) && (m === 50)) state[keyUp] = 3;
 	if ((n === 38) && (m === 50)) state[keyDown] = 3;
 	if ((n === 38) && (m === 50)) state[keyUp] = 3;
 	if ((n === 39) && (m === 50)) state[keyDown] = 3;
 	if ((n === 39) && (m === 50)) state[keyUp] = 3;
 	if ((n === 40) && (m === 50)) state[keyDown] = 3;
  	if ((n === 40) && (m === 50)) state[keyUp] = 3;
 	if ((n === 41) && (m === 50)) state[keyDown] = 3;
 	if ((n === 41) && (m === 50)) state[keyUp] = 3;
 	if ((n === 42) && (m === 50)) state[keyDown] = 3;
 	if ((n === 42) && (m === 50)) state[keyUp] = 3;
 	if ((n === 43) && (m === 50)) state[keyDown] = 3;
 	if ((n === 43) && (m === 50)) state[keyUp] = 3;
 	if ((n === 44) && (m === 50)) state[keyDown] = 3;


 	if ((n === 44) && (m === 49)) state[keyUp] = 3;
 	if ((n === 44) && (m === 49)) state[keyDown] = 3;
		}
	}
  return state;
}
