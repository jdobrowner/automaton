import { CYCLE, PATTERN } from '../actions/types';
import initialStates from './initialStates/index';
import automate from './rulesets/automate';

export default function cycle(state = initialStates.hexagon(), action) {
	switch (action.type) {
		case CYCLE:
			return automate(state);
		case PATTERN:
			return newPattern(action.pattern);
		default:
			return state;
	}
}

function newPattern(pattern) {
	switch (pattern) {
		case 'border':
			return initialStates.border();
		case 'face':
			return initialStates.face();
		case 'hexagon':
			return initialStates.hexagon();
		case 'little triangle':
			return initialStates.oneTriangle();
		case 'thunderbolt':
			return initialStates.thunderbolt();
		case 'big triangle':
			return initialStates.triangle();
		case 'triforce':
			return initialStates.triforce();
		case 'nested triangle':
			return initialStates.nestedTriangle();
		default:
			return initialStates.triangle();
	}
}
