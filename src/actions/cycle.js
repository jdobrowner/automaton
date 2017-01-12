import { CYCLE } from './types';

export default (ruleset) => {
	return {
		type: CYCLE,
		ruleset: ruleset
	}
}
