// 2/3 pi
function bDirection(a = 0, b = 0, c = 0, d = 0) {
  return b;
}

// 2 pi
function cDirection(a = 0, b = 0, c = 0, d = 0) {
  return c;
}

// 4/3 pi
function dDirection(a = 0, b = 0, c = 0, d = 0) {
  return d;
}

function expander(a = 0, b = 0, c = 0, d = 0) {
  const sum = a + b + c + d;
  return sum % 4;
}

function expanderRand(a = 0, b = 0, c = 0, d = 0) {
  const rand = Math.random() * 1000;

  if (rand < 0.02) return set4(a,b,c,d);
  else if (rand < 0.04) set5(a,b,c,d);
  else if ( rand < 0.06 ) set6(a,b,c,d);
  else return expander(a,b,c,d);
}

function billow(a = 0, b = 0, c = 0, d = 0) {
  let x = (2*b + c + d) % 4;
  return x;
}

function billowRand(a = 0, b = 0, c = 0, d = 0) {
  const rand = Math.random() * 200;

  if ((a === 0) && (b === 0) && (c === 0) && (d === 0) && (rand < 0.002)) {
    if (rand < 0.0005) return 1;
    else if (rand < 0.001) return 2;
    else if (rand < 0.0015) return 3;
    else return 0;
  }
  else return billow(a,b,c,d);
}

// a really good random one, good with triforce
function mangler(a = 0, b = 0, c = 0, d = 0) {
  const rand = Math.random() * 6;
  if (rand < 1) return b;
  else if (rand < 2) return c;
  else if ( rand < 3 ) return d;
  else return a;
}

function manglerRand(a = 0, b = 0, c = 0, d = 0) {
  const rand = Math.random() * 10;

  if ((a === 0) && (b === 0) && (c === 0) && (d === 0) && (rand < 0.002)) {
    if (rand < 0.0005) return 1;
    else if (rand < 0.001) return 2;
    else if (rand < 0.0015) return 3;
    else return 0;
  }

  if (rand < 7) return a;
  else if (rand < 8) return b;
  else if ( rand < 9 ) return c;
  else return d;
}

function birds(a = 0, b = 0, c = 0, d = 0) {
	if ((b + c) > 2) return 0;
		else {
			let z = (a + d);
			if (z > 3) return 3;
			else return z;
		}
}

function birdsRand(a = 0, b = 0, c = 0, d = 0) {
  const rand = Math.random() * 20;

  if ((a === 0) && (b === 0) && (c === 0) && (d === 0) && (rand < 0.002)) {
    if (rand < 0.0005) return 1;
    else if (rand < 0.001) return 2;
    else if (rand < 0.0015) return 3;
    else return 0;
  }

	if ((b + c) > 2) return 0;
		else {
			let z = (a + d);
			if (z > 3) return 3;
			else return z;
		}
}

function horizons(a = 0, b = 0, c = 0, d = 0) {
	if ((d <= 1) && (c > 2)) {
		return 3;
	}
	if ((b < 3) && (a > 1)) {
		return 3;
	}
}

function horizonsRand(a = 0, b = 0, c = 0, d = 0) {
	if ((d <= 1) && (c > 2)) {
		return 3;
	}
	if ((b < 3) && (a > 1)) {
		return 3;
	}
	else {
    return Math.floor(Math.random() * 2);
  }
}

// definitely a keeper, best with 81 sided grid
// with a 20 cells high triangle as the initial state
function harmony(a = 0, b = 0, c = 0, d = 0) {
  let x = (b + c + d) % 4;
  return x;
}

function harmonyRand(a = 0, b = 0, c = 0, d = 0) {
  const rand = Math.random() * 1000;

  if (rand < 0.02) return set4(a,b,c,d);
  else if (rand < 0.04) set5(a,b,c,d);
  else if ( rand < 0.06 ) set6(a,b,c,d);
  else return unknown(a,b,c,d);
}

const rulesets = {
  expander, expanderRand,
  billow, billowRand,
  mangler, manglerRand,
  birds, birdsRand,
  horizons, horizonsRand,
  harmony, harmonyRand
};

export default rulesets;
