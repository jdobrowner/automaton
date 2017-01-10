import { size } from '../../constants';

const apex1 = { x : 32, y : 15 };
const apex2 = { x : 32, y : 21 };
const apex3 = { x : 32, y : 27 };
const triangleHeight1 = 27;
const triangleHeight2 = 18;
const triangleHeight3 = 9;

let state = {};

export default () => {

  for (let m = 0; m < size; m++) {
		for (let n = 0; n < size; n++) {

			const keyDown = `${n}-${m}`;
			const keyUp = `${n}+${m}`;

      state[keyDown] = 0;
			state[keyUp] = 0;

			state[keyDown] = triangleDown(n, m, apex1, 3, triangleHeight1, keyDown);
			state[keyUp] = triangleUp(n, m, apex1, 3, triangleHeight1, keyUp);

      state[keyDown] = triangleDown(n, m, apex2, 2, triangleHeight2, keyDown);
			state[keyUp] = triangleUp(n, m, apex2, 2, triangleHeight2, keyUp);

      state[keyDown] = triangleDown(n, m, apex3, 1, triangleHeight3, keyDown);
			state[keyUp] = triangleUp(n, m, apex3, 1, triangleHeight3, keyUp);




		}
	}
  return state;
}

function getValueUp(n, m) {
  return triangleUp(n, m, apex1, 3, triangleHeight1) || triangleUp(n, m, apex2, 2, triangleHeight2) || triangleUp(n, m, apex3, 1, triangleHeight3);
}

function getValueDown(n, m) {
  return triangleDown(n, m, apex1, 3, triangleHeight1) || triangleDown(n, m, apex2, 2, triangleHeight2) || triangleDown(n, m, apex3, 1, triangleHeight3);
}

function triangleDown(n, m, apex, color, triangleHeight, key) {
  if ( m >= apex.y && m < apex.y + triangleHeight ) {
    if ( n >= apex.x - triangleHeight/2 && n < apex.x + triangleHeight/2 ) {
      const row = m - apex.y;
      const num1 = n + m - Math.ceil(row/2);
      const num2 = apex.x + apex.y;
      const num3 = n - m + Math.floor(row/2);
      const num4 = apex.x - apex.y;
      if ((num1 >= num2 ) && (num3 < num4)) {
        return color;
      }
    }
  }
  return state[key];
}

function triangleUp(n, m, apex , color, triangleHeight, key) {
  if ( m >= apex.y && m < apex.y + triangleHeight ) {
    if ( n >= apex.x - triangleHeight/2 && n < apex.x + triangleHeight/2 ) {
      const row = m - apex.y;
      const num1 = n + m - Math.floor(row/2);
      const num2 = apex.x + apex.y;
      const num3 = n - m + Math.ceil(row/2);
      const num4 = apex.x - apex.y;
      if ((num1 >= num2 ) && (num3 <= num4)) {
        return color;
      }
    }
  }
  return state[key];
}
