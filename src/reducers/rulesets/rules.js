function rule1(a, b, c, d) {
  if (!b && !c && !d) return !a;
  return a;
}

function rule1(a, b, c, d) {
  if (b && !c && !d) return !a;
  return a;
}
