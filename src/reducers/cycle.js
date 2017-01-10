import { CYCLE, PATTERN, RULESET } from '../actions/types';
import initialStates from './initialStates/index';
import automate from './rulesets/automate';
import rulesJ from './rulesets/rules';
import rulesM from './rulesets/rules-monika';

export default function cycle(state = initialPattern(), action) {
	switch (action.type) {
		case CYCLE:
			return automate(state, getRuleset(action.ruleset)); //action.ruleset is currently and integer [0, 12]
		case RULESET:
			return automate(state, getRuleset(action.ruleset)); //action.ruleset is currently and integer [0, 12]
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

function initialPattern() {
	const rand = Math.floor( Math.random() * 8 );
	switch (rand) {
		case 0:
			return initialStates.border();
		case 1:
			return initialStates.face();
		case 2:
			return initialStates.hexagon();
		case 3:
			return initialStates.oneTriangle();
		case 4:
			return initialStates.thunderbolt();
		case 5:
			return initialStates.triangle();
		case 6:
			return initialStates.triforce();
		case 7:
			return initialStates.nestedTriangle();
		default:
			return initialStates.nestedTriangle();
	}
}

function getRuleset(ruleset) {
  switch (ruleset) {
    case 'expander': return rulesJ.set2;
    case 'cloner': return rulesJ.set7;
    case 'floater': return rulesJ.set12;
    case 'mangler': return rulesJ.set15;
    case 'mangler high R': return rulesJ.set16;
    case 'expander medium R': return rulesJ.set17;
    case 'birds': return rulesM.setA;
    case 'horizons mediun R': return rulesM.setB;
    case 'birds v2': return rulesM.setC;
    case 'rain': return rulesM.setD;
    default: return rulesJ.set2;
  }
}

function getInitialRuleset() {
  // const rand = Math.floor( Math.random() * 15 );
  return rulesJ.set2;
}
