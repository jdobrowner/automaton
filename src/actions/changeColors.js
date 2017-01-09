import { COLORS } from './types';

export default (colors) => {
	return {
		type: COLORS,
    colors: colors // an array of 4 colors
	}
}
