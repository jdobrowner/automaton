import { CYCLE, PATTERN, RULESET } from '../actions/types';
import initialStates from './initialStates/index';
import automate from './rulesets/automate';
import rules from './rulesets/rules';
import rockPaperScissors from './rulesets/rockPaperScissors';

export default function cycle(state = initialPattern(), action) {
	switch (action.type) {
		case CYCLE:
			return automate(state, getRuleset(action.ruleset));
		case RULESET:
			return automate(state, getRuleset(action.ruleset));
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
    case 'expander': return rules.expander;
		case 'expander random': return rules.expanderRand;
    case 'cloner': return rules.cloner;
		case 'cloner random': return rules.clonerRand;
    case 'billow': return rules.billow;
		case 'billow random': return rules.billowRand;
    case 'mangler': return rules.mangler;
    case 'mangler random': return rules.manglerRand;
    case 'birds': return rules.birds;
		case 'birds random': return rules.birdsRand;
    case 'horizons': return rules.horizons;
		case 'horizons': return rules.horizonsRand;
		case 'harmony': return rules.harmony;
		case 'harmony random': return rules.harmony;
		case 'rockPaperScissors': return rockPaperScissors.rockPaperScissors;
		case 'rockPaperScissors random': return rockPaperScissors.rockPaperScissorsRand;
    default: return rules.expander;
  }
}

function getInitialRuleset() {
  const rand = Math.floor( Math.random() * 4 );
  switch (rand) {
		case 1: return rules.expander;
		case 2: return rules.cloner;
		case 3: return rules.billow;
		case 4: return rules.unknown;
		default: return rules.expander;
	}
}
