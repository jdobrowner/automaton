import { PAUSE } from '../actions/types';

export default function cycle(state = false, action) {
	switch (action.type) {
		case PAUSE:
			return !state;
		default:
			return state;
	}
}
