function solution(num, arr = [[]]) {
  const sorted = arr.sort((a, b) => b[0] - a[0]);
  sorted[0][0] /= 2;

  const formatted = sorted
    .map(([prod, deli]) => prod + deli)
    .sort((a, b) => a - b);
  let sum = 0;
  let cnt = 0;

  for (let i = 0; i < formatted.length; i++) {
    if (sum >= num) {
      break;
    }

    sum += formatted[i];
    cnt++;
  }

  return cnt;
}

console.log(
  solution(28, [
    [6, 6],
    [2, 2],
    [4, 3],
    [4, 5],
    [10, 3],
  ])
);
