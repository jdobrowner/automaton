import { size } from '../../constants';

export default () => {
  let state = {};

  for (let m = 0; m < size; m++) {
		for (let n = 0; n < size; n++) {

			const keyDown = `${n}-${m}`;
			const keyUp = `${n}+${m}`;

			state[keyDown] = 0;
			state[keyUp] = 0;

	const a = size/2 - 4;
	const b = size/2;

  // if ((n>a-10) && (n<a+10) && (m>a-10) && (m<a+10)) {
  //   state[keyUp] = 2;
  //   state[keyDown] = 2;
  // }
  // else if ((n>a-12) && (n<a+12) && (m>a-12) && (m<a+12)) {
  //   state[keyUp] = 3;
  //   state[keyDown] = 3;
  // }

      // the stating square
      if ((n>a-14) && (n<a+12) && (m>b-10) && (m<b+10)) {
        state[keyUp] = 2;
        state[keyDown] = 2;

        // the stripes
        if ((n>=a-9) && (n<a-7) || (n>=a-3) && (n<a-1) || (n>=a+3) && (n<a+5) || (n>=a+9) && (n<a+11)) {
          state[keyUp] = 1;
          state[keyDown] = 1;
        }

        // lop off corners to make fish shape
        let M = b-9;
        let N = a-6;
        // even row
        if ((n < N) && (m === M)) {
          state[keyUp] = 0;
          state[keyDown] = 0;
        }
        // odd row
        if (m === M+1) {
          if (n < N-1) state[keyUp] = 0;
          if (n < N) state[keyDown] = 0;
        }
        // even row
        if ((n < N-1) && (m === M+2)) {
          state[keyUp] = 0;
          state[keyDown] = 0;
        }
        // odd row
        if (m === M+3) {
          if (n < N-2) state[keyUp] = 0;
          if (n < N-1) state[keyDown] = 0;
        }
        // even row
        if ((n < N-2) && (m === M+4)) {
          state[keyUp] = 0;
          state[keyDown] = 0;
        }
        // odd row
        if (m === M+5) {
          if (n < N-3) state[keyUp] = 0;
          if (n < N-2) state[keyDown] = 0;
        }
        // even row
        if ((n < N-3) && (m === M+6)) {
          state[keyUp] = 0;
          state[keyDown] = 0;
        }
        // odd row
        if (m === M+7) {
          if (n < N-4) state[keyUp] = 0;
          if (n < N-3) state[keyDown] = 0;
        }
        // even row
        if ((n < N-4) && (m === M+8)) {
          state[keyUp] = 0;
          state[keyDown] = 0;
        }
        // odd row
        if (m === M+9) {
          if (n < N-5) state[keyUp] = 0;
          if (n < N-4) state[keyDown] = 0;
        }
        // even row
        if ((n < N-5) && (m === M+10)) {
          state[keyUp] = 0;
          state[keyDown] = 0;
        }
        // odd row
        if (m === M+11) {
          if (n < N-6) state[keyUp] = 0;
          if (n < N-5) state[keyDown] = 0;
        }
        // even row
        if ((n < N-6) && (m === M+12)) {
          state[keyUp] = 0;
          state[keyDown] = 0;
        }

        // mouth
        // odd row
        if (m === M+13) {
          if (n < N-6) state[keyUp] = 0;
          if (n < N-6) state[keyDown] = 0;
        }
        // even row
        if ((n < N-6) && (m === M+14)) {
          state[keyUp] = 0;
          state[keyDown] = 0;
        }

        // after direction change
        // // odd row
        if ((n < N-6) && (m === M+15)) {
          state[keyUp] = 0;
          state[keyDown] = 0;
        }
        // even row
        if (m === M+16) {
          if (n < N-5) state[keyUp] = 0;
          if (n < N-6) state[keyDown] = 0;
        }
        // odd row
        if ((n < N-5) && (m === M+17)) {
          state[keyUp] = 0;
          state[keyDown] = 0;
        }
        // even row
        if (m === M+18) {
          if (n < N-4) state[keyUp] = 0;
          if (n < N-5) state[keyDown] = 0;
        }
        // odd row
        if ((n < N-4) && (m === M+19)) {
          state[keyUp] = 0;
          state[keyDown] = 0;
        }
        // even row
        if (m === M+20) {
          if (n < N-3) state[keyUp] = 0;
          if (n < N-4) state[keyDown] = 0;
        }

      }

      // eyeball
      const c = 20;
    	const d = 31;

    	if ((n === c+1) && (m === d)) state[keyUp] = 3;
      if ((n === c) && (m === d)) state[keyDown] = 3;
      if ((n === c) && (m === d)) state[keyUp] = 3;
      if ((n === c+1) && (m === d+1)) state[keyDown] = 3;
      if ((n === c) && (m === d+1)) state[keyUp] = 3;
      if ((n === c) && (m === d+1)) state[keyDown] = 3;


    }
  }
  return state;
}
