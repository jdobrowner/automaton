export default (state) => {
	let grid = { ...state };
	for (let cell in grid) {
		grid[cell] = !grid[cell];
	}
	return grid;
}
