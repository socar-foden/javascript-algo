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

// 틀렸다. --> 상품가격이 제일 높은 걸 할인 받는게 아님
// 정렬 후, 각 경우를 '완전탐색'해봐야 한다.
