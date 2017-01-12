import { RULESET } from '../actions/types';

export default function cycle(state = 'expander', action) {
	switch (action.type) {
		case RULESET:
			return action.ruleset;
		default:
			return state;
	}
}
