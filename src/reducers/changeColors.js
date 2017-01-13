import { COLORS } from '../actions/types';
import colors from '../colors';

function getInitialColor() {
  return colors.southwest;
}

export default function cycle(state = getInitialColor(), action) {
	switch (action.type) {
		case COLORS:
			return action.colors;
		default:
			return state;
	}
}
