import { size } from '../../constants';

const apex1 = { x : 32, y : 15 };
const apex2 = { x : 24, y : 31 };
const apex3 = { x : 40, y : 31 };
const triangleHeight = 16;

export default () => {
  let state = {};

  for (let m = 0; m < size; m++) {
		for (let n = 0; n < size; n++) {

			const keyDown = `${n}-${m}`;
			const keyUp = `${n}+${m}`;

			state[keyDown] = getValueDown(n, m);
			state[keyUp] = getValueUp(n, m);
		}
	}
  return state;
}

function getValueUp(n, m) {
  return triangleUp(n, m, apex1, 2) || triangleUp(n, m, apex2, 1) || triangleUp(n, m, apex3, 3);
}

function getValueDown(n, m) {
  return triangleDown(n, m, apex1, 2) || triangleDown(n, m, apex2, 1) || triangleDown(n, m, apex3, 3);
}

function triangleDown(n, m, apex, color) {
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
  return 0;
}

function triangleUp(n, m, apex , color) {
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
  return 0;
}
