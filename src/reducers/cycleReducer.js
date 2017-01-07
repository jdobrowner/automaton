import { CYCLE } from '../actions/types';
import triforce from './initialStates/triforce';
import triangle from './initialStates/triangle';
import oneTriangle from './initialStates/oneTriangle';
import automate from './rulesets/automate';

export default function cycle(state = oneTriangle(), action) {
	switch (action.type) {
		case CYCLE:
			return automate(state);
		default:
			return state;
	}
}
