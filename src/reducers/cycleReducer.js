import { CYCLE } from '../actions/types';
import initialStates from './initialStates/index';
import automate from './rulesets/automate';

export default function cycle(state = initialStates.triforce(), action) {
	switch (action.type) {
		case CYCLE:
			return automate(state);
		default:
			return state;
	}
}
