import { SPEED } from '../actions/types';

export default function cycle(state = 1000, action) {
	switch (action.type) {
		case SPEED:
			return action.speed;
		default:
			return state;
	}
}
