export default () => {
	let state = {};
	const size = 30;

	for (let m = 0; m < size; m++) {
		for (let n = 0; n < size; n++) {
			const keyDown = `${n}-${m}`;
			const keyUp = `${n}+${m}`;

			state[keyDown] = randomValue();
			state[keyUp] = randomValue();
		}
	}
	return state;
}

function randomValue() {
	return Math.random() < 0.5;
}
