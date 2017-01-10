import { RULESET } from './types';

export default (ruleset) => {
	return {
		type: RULESET,
    ruleset: ruleset // currently and integer [0, 12]
	}
}
