import { CYCLE } from '../actions/types';
import randomState from './initialStates/random';
import triforce from './initialStates/triforce';
import triangle from './initialStates/triangle';
import oneTriangle from './initialStates/oneTriangle';
import random from './initialStates/random';
import automate from './rulesets/automate';
import randomRuleset from './rulesets/random';

export default function cycle(state = oneTriangle(), action) {
	switch (action.type) {
		case CYCLE:
			return automate(state);
		default:
			return state;
	}
}
