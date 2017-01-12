function rockPaperScissors(a = 0, b = 0, c = 0, d = 0) {
  if (a === 0) {
    if ((b === 3) || (c === 3) || (d === 3)) return 3;
    if ((b === 2) || (c === 2) || (d === 2)) return 2;
    if ((b === 1) || (c === 1) || (d === 1)) return 1;
    else return a;
  }
  if (a === 1) {
    if ((b === 3) || (c === 3) || (d === 3)) return 3;
  }
  if (a === 2) {
    if ((b === 1) || (c === 1) || (d === 1)) return 1;
  }
  if (a === 3) {
    if ((b === 2) || (c === 2) || (d === 2)) return 2;
  }
  return a;
}

function rockPaperScissorsRand(a = 0, b = 0, c = 0, d = 0) {
  const rand = Math.random() * 50;

  if (rand < 0.003) {
    if (rand < 0.001) return 1;
    else if (rand < 0.002) return 2;
    else if (rand < 0.003) return 3;
  }

  if (a === 0) {
    if ((b === 3) || (c === 3) || (d === 3)) return 3;
    if ((b === 2) || (c === 2) || (d === 2)) return 2;
    if ((b === 1) || (c === 1) || (d === 1)) return 1;
    else return a;
  }
  if (a === 1) {
    if ((b === 3) || (c === 3) || (d === 3)) return 3;
  }
  if (a === 2) {
    if ((b === 1) || (c === 1) || (d === 1)) return 1;
  }
  if (a === 3) {
    if ((b === 2) || (c === 2) || (d === 2)) return 2;
  }
  return a;
}

export default {
  rockPaperScissors, rockPaperScissorsRand
}
