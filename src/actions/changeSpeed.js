import { SPEED } from './types';

export default (newSpeed) => {
	return {
		type: SPEED,
    speed: newSpeed
	}
}
