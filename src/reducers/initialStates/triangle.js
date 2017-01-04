const topApex = { x : 15, y : 5 };
const triangleHeight = 20;

export default () => {
  let state = {};
  const size = 30;

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
  if ( m >= topApex.y && m < topApex.y + triangleHeight ) {
    if ( n >= topApex.x - triangleHeight/2 && n < topApex.x + triangleHeight/2 ) {
      const row = m - topApex.y;
      const num1 = n + m - Math.floor(row/2);
      const num2 = topApex.x + topApex.y;
      const num3 = n - m + Math.ceil(row/2);
      const num4 = topApex.x - topApex.y;

      if ((num1 >= num2 ) && (num3 <= num4)) {
        return true;
      }
    }
  }
  return false;
}

function getValueDown(n, m) {
  if ( m >= topApex.y && m < topApex.y + triangleHeight ) {
    if ( n >= topApex.x - triangleHeight/2 && n < topApex.x + triangleHeight/2 ) {
      const row = m - topApex.y;
      const num1 = n + m - Math.ceil(row/2);
      const num2 = topApex.x + topApex.y;
      const num3 = n - m + Math.floor(row/2);
      const num4 = topApex.x - topApex.y;

      if ((num1 >= num2 ) && (num3 < num4)) {
        return true;
      }
    }
  }
  return false;
}
