import { CYCLE } from '../actions/types';
import randomState from './initialStates/random';
import triforce from './initialStates/triforce';
import flip from './rulesets/switch';
import randomRuleset from './rulesets/random';

export default function cycle(state = triforce(), action) {
	switch (action.type) {
		case CYCLE:
			return flip(state);
		default:
			return state;
	}
}
