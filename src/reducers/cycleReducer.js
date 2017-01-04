import { CYCLE } from '../actions/types';

function (state = getInitialState(), action) {
	switch (action.type) {
		case CYCLE:
			return getNextState(state);
		default:
			return state;
	}
}

function getNextState(state) {
	let grid = { ...state };
	for (let cell in grid) {
		grid[cell]++;
	}
	return grid;
}

function getInitialState() {
	let state = {};
	const size = 30;

	for (let m = 0; m < size; m++) {
		for (let n = 0; n < size; n++) {
			const keyDown = `${n}-${m}`;
			const keyUp = `${n}+${m}`;
			
			state[keyDown] = 0;
			state[keyUp] = 0;
		}
	}
	return state;
}