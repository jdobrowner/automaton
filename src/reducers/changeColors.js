import { COLORS } from '../actions/types';
import colors from '../colors';

function getInitialColor() {
  const rand = Math.floor( Math.random() * Object.keys(colors).length );
  switch (rand) {
    case 0: return colors.purple;
    case 1: return colors.green;
    case 2: return colors.brights;
    case 3: return colors.red;
    case 4: return colors.ocean;
    case 5: return colors.southwest;
    default: return colors.purple;
  }
}

export default function cycle(state = getInitialColor(), action) {
	switch (action.type) {
		case COLORS:
			return action.colors;
		default:
			return state;
	}
}
