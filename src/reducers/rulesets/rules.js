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

// definitely a keeper
function set10(a = 0, b = 0, c = 0, d = 0) {
  let x = (b + c + d) % 4;
  return x;
}

// made an oscillating-2 pattern
function set11(a = 0, b = 0, c = 0, d = 0) {
  let x = (a * (b + d + c)) % 4;
  return x;
}


module.exports = { set1, set2, set3, set4, set5, set6, set7, set8, set9, set10, set11 };
