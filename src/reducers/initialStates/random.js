import { size } from '../../constants';

export default () => {
	let state = {};

	for (let m = 0; m < size; m++) {
		for (let n = 0; n < size; n++) {
			const keyDown = `${n}-${m}`;
			const keyUp = `${n}+${m}`;

			state[keyDown] = randomValue();
			state[keyUp] = randomValue();
		}
	}
	return state;
}

function randomValue() {
	const rand = Math.random() * 4;
	if ( rand < 1 ) return 0;
	else if ( rand < 2 ) return 1;
	else if ( rand < 3 ) return 2;
	else return 4;
}
