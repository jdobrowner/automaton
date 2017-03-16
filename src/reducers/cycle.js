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

function initialPattern() {
	return initialStates.hexagon();
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
		case 'fish':
			return initialStates.fish();
		default:
			return initialStates.triforce();
	}
}

function getRuleset(ruleset) {
  switch (ruleset) {
    case 'expander': return rules.expander;
		case 'expander random': return rules.expanderRand;
    case 'billow': return rules.billow;
		case 'billow random': return rules.billowRand;
    case 'mangler': return rules.mangler;
    case 'mangler random': return rules.manglerRand;
    case 'birds': return rules.birds;
		case 'birds random': return rules.birdsRand;
    case 'horizons': return rules.horizons;
		case 'horizons random': return rules.horizonsRand;
		case 'harmony': return rules.harmony;
		case 'harmony random': return rules.harmony;
		case 'swirls': return rockPaperScissors.rockPaperScissors;
		case 'swirls random': return rockPaperScissors.rockPaperScissorsRand;
    default: return rules.expander;
  }
}
