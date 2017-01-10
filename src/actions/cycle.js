import { CYCLE } from './types';

export default (ruleset) => {
	return {
		type: CYCLE,
		ruleset: ruleset // currently and integer [0, 12]
	}
}
