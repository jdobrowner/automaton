import { CYCLE } from '../actions/types';
import initialStates from './initialStates/index';
import automate from './rulesets/automate';

export default function cycle(state = initialStates.thunderbolt(), action) {
	switch (action.type) {
		case CYCLE:
			return automate(state);
		default:
			return state;
	}
}
