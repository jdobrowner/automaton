import * as rule from './rules';

function automate(state) {
  let grid = {};
	const size = 30;

	for (let m = 0; m < size; m++) {
		for (let n = 0; n < size; n++) {
			const keyDown = `${n}-${m}`;
			const keyUp = `${n}+${m}`;

      const a = state[keyDown];
      const A = state[keyUp];
      const b = state[`${n}+${m-1}`];
      const D = state[`${n}-${m+1}`];

      // one cell is being double refered to in c/C
      // one cell is being ignored in b/B
      let c, d, B, C;
      if ( m%2 === 0) {
        c = state[`${n-1}+${m}`];
        d = A;
        B = state[`${n+1}-${m}`];
        C = a;
      }
      else {
        c = A;
        d = state[`${n+1}+${m}`];
        B = a;
        C = state[`${n-1}-${m}`];
      }

			grid[keyDown] = rule.set2(a,b,c,d);
			grid[keyUp] = rule.set2(A,B,C,D);
		}
	}
	return grid;
}

export default automate;
