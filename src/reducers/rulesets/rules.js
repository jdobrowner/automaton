function set1(a = 0, b = 0, c = 0, d = 0) {
  return (a+1)%4;
}

function set2(a = 0, b = 0, c = 0, d = 0) {
  const sum = a + b + c + d;
  return sum % 4;
}

function set3(a = 0, b = 0, c = 0, d = 0) {
  return a;
}

function set4(a = 0, b = 0, c = 0, d = 0) {
  return b;
}

function set5(a = 0, b = 0, c = 0, d = 0) {
  return c;
}

function set6(a = 0, b = 0, c = 0, d = 0) {
  return d;
}

module.exports = { set1, set2, set3, set4, set5, set6 };
