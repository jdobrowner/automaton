function set1(a = 0, b = 0, c = 0, d = 0) {
  return (a+1)%4;
}

// keeper
function set2(a = 0, b = 0, c = 0, d = 0) {
  const sum = a + b + c + d;
  return sum % 4;
}


// static
function set3(a = 0, b = 0, c = 0, d = 0) {
  return a;
}

// 2/3 pi
function set4(a = 0, b = 0, c = 0, d = 0) {
  return b;
}

// 2 pi
function set5(a = 0, b = 0, c = 0, d = 0) {
  return c;
}

// 4/3 pi
function set6(a = 0, b = 0, c = 0, d = 0) {
  return d;
}

// keeper
function set7(a = 0, b = 0, c = 0, d = 0) {
  let x = (a + b + c) % 4;
  return x;
}

// like set 7, different direction
function set8(a = 0, b = 0, c = 0, d = 0) {
  let y = (a + b + d) % 4;
  return y;
}

// like set 7, different direction
function set9(a = 0, b = 0, c = 0, d = 0) {
  let z = (a + c + d) % 4;
  return z;
}

// definitely a keeper, best with 81 sided grid
// with a 20 cells high triangle as the initial state
function set10(a = 0, b = 0, c = 0, d = 0) {
  let x = (b + c + d) % 4;
  return x;
}

// made an oscillating-2 pattern
function set11(a = 0, b = 0, c = 0, d = 0) {
  let x = (a * (b + d + c)) % 4;
  return x;
}

// I like this one, especially with the big triangle initial state
function set12(a = 0, b = 0, c = 0, d = 0) {
  let x = (2*b + c + d) % 4;
  return x;
}

// this one travels in the b direction
function set13(a = 0, b = 0, c = 0, d = 0) {
  let x = (b*a*a + c*a + d) % 4;
  return x;
}

function set14(a = 0, b = 0, c = 0, d = 0) {
  if ((a === 0) && (b === 0) && (c === 0)) {
    return d;
  }
  else return a;
}

// a really good random one, good with triforce
// function set15(a = 0, b = 0, c = 0, d = 0) {
//   const rand = Math.random() * 10;
//   if (rand < 1) return b;
//   else if (rand < 3) return c;
//   else if ( rand < 7 ) return a;
//   else return d;
// }

// a really good random one, good with triforce
function set15(a = 0, b = 0, c = 0, d = 0) {
  const rand = Math.random() * 5;
  if (rand < 1) return b;
  else if (rand < 2) return c;
  else if ( rand < 3 ) return d;
  else return a;
}

// another really good random one, good with triforce
function set16(a = 0, b = 0, c = 0, d = 0) {
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

// This is a set2 rule with a smidgen of randomness
// This one is super cool
function set17(a = 0, b = 0, c = 0, d = 0) {
  const rand = Math.random() * 1000;

  if (rand < 0.01) return set4(a,b,c,d);
  else if (rand < 0.02) set5(a,b,c,d);
  else if ( rand < 0.03 ) set6(a,b,c,d);
  else return set2(a,b,c,d);
}


module.exports = {
                    set1,
                    set2,
                    set3,
                    set4,
                    set5,
                    set6,
                    set7,
                    set8,
                    set9,
                    set10,
                    set11,
                    set12,
                    set13,
                    set14,
                    set15,
                    set16,
                    set17
                };
