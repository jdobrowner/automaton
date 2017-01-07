import { EXPLAIN } from '../actions/types';

export default function explain(state = false, action) {
	switch (action.type) {
		case EXPLAIN:
			return !state;
		default:
			return state;
	}
}
