import { size } from '../../constants';

export default () => {
  let state = {};

  for (let m = 0; m < size; m++) {
		for (let n = 0; n < size; n++) {

			const keyDown = `${n}-${m}`;
			const keyUp = `${n}+${m}`;

			state[keyDown] = 0;
			state[keyUp] = 0;

	const a = size/2 - 2;
	const b = size/2 - 1;


      // the starting square
      if ((n>a-10) && (n<a+8) && (m>b-6) && (m<b+8)) {
        state[keyUp] = 2;
        state[keyDown] = 2;


        // the stripes
        if ((n>=a-4) && (n<a-2) || (n>=a) && (n<a+2) || (n>=a+4) && (n<a+6)) {
          state[keyUp] = 1;
          state[keyDown] = 1;
        }

        if ((m === b-5) || (m === b-4)) {
          state[keyUp] = 3;
          state[keyDown] = 3;
        }

        // lop off corners to make fish shape
        let M = b-6;
        let N = a-5;
        // even row
        // if ((n < N+1) && (m === M)) {
        //   state[keyUp] = 0;
        //   state[keyDown] = 0;
        // }
        // odd row
        if (m === M+1) {
          if (n < N) state[keyUp] = 0;
          if (n < N+1) state[keyDown] = 0;
        }
        // even row
        if ((n < N) && (m === M+2)) {
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
        if ((n < N-3) && (m === M+12)) {
          state[keyUp] = 0;
        }
        if (m === M+13) {
          if (n < N-3) state[keyUp] = 0;
          if (n < N-3) state[keyDown] = 0;
        }
      }

      // eyeball
      const c = 23;
    	const d = 31;

    	if ((n === c+1) && (m === d)) state[keyUp] = 3;
      if ((n === c) && (m === d)) state[keyDown] = 3;
      if ((n === c) && (m === d)) state[keyUp] = 3;
      if ((n === c+1) && (m === d+1)) state[keyDown] = 3;
      if ((n === c) && (m === d+1)) state[keyUp] = 3;
      if ((n === c) && (m === d+1)) state[keyDown] = 3;

      // fins
      if ((m === b-5) && (n === a+8)) state[keyDown] = 3;
      if ((m === b-5) && (n === a+9)) state[keyDown] = 3;
      if ((m === b-5) && (n === a+8)) state[keyUp] = 3;
      if ((m === b-4) && (n === a+8)) state[keyDown] = 3;
      if ((m === b-4) && (n === a+8)) state[keyUp] = 3;
      if ((m === b-3) && (n === a+8)) state[keyDown] = 2;
      if ((m === b+6) && (n === a+8)) state[keyUp] = 2;
      if ((m === b+7) && (n === a+8)) state[keyDown] = 2;
      if ((m === b+7) && (n === a+8)) state[keyUp] = 2;

      if ((m === b+2) && (n > a-1) && (n < a+3)) {
        state[keyUp] = 3;
        state[keyDown] = 3;
      }
      if ((m === b+3) && (n > a-1) && (n < a+2)) {
        state[keyUp] = 3;
        state[keyDown] = 3;
      }
      if ((m === b+4) && (n > a) && (n < a+2)) {
        state[keyUp] = 3;
        state[keyDown] = 3;
      }
      if ((m === b+2) && (n === a-1)) state[keyDown] = 3;
      if ((m === b+3) && (n === a+2)) state[keyDown] = 3;
      if ((m === b+4) && (n === a)) state[keyDown] = 3;
      if ((m === b+5) && (n === a+1)) state[keyDown] = 3;

      if ((m === b-1) && (n === a+9)) state[keyUp] = 3;
      if ((m === b) && (n === a+9)) {
        state[keyUp] = 3;
        state[keyDown] = 3;
      }
      if ((m === b+1) && (n > a+7) && (n < a+10)) {
        state[keyUp] = 3;
        if (n === a+9) state[keyDown] = 3;
      }
      if ((m === b+2) && (n > a+7) && (n < a+10)) {
        state[keyUp] = 3;
        state[keyDown] = 3;
      }
      if ((m === b+3) && (n > a+7) && (n < a+10)) {
        state[keyUp] = 3;
        state[keyDown] = 3;
      }
      if ((m === b+4) && (n === a+9)) {
        state[keyUp] = 3;
        state[keyDown] = 3;
      }
      if ((m === b+4) && (n === a+8)) state[keyDown] = 3;
      if ((m === b+5) && (n === a+9)) state[keyDown] = 3;
      if ((m === b+5) && (n === a+9)) state[keyUp] = 3;
      if ((m === b+6) && (n === a+9)) state[keyDown] = 3;

    }
  }
  return state;
}
