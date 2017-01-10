import { RULESET } from '../actions/types';

export default function cycle(state = '1', action) {
	switch (action.type) {
		case RULESET:
			return action.ruleset;
		default:
			return state;
	}
}
