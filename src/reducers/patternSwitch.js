import { PATTERN } from '../actions/types';

export default function cycle(state = true, action) {
	switch (action.type) {
		case PATTERN:
			return !state;
		default:
			return state;
	}
}
