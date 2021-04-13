function solution(m, arr = []) {
  const sorted = [...arr].sort((a, b) => a - b);

  let l = 0;
  let r = arr.length;
  let centerIdx = Math.floor((r + l) / 2);
  let center = sorted[centerIdx];

  while (l < r) {
    if (center > m) {
      r = centerIdx;
    } else {
      l = centerIdx;
    }

    centerIdx = Math.floor((r + l) / 2);
    center = sorted[centerIdx];

    if (center === m) {
      break;
    }
  }

  return centerIdx + 1;
}

console.log(solution(32, [23, 87, 65, 12, 57, 32, 99, 81]));
