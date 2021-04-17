function solution(arr = [[]]) {
  const stack = [];

  const sorted = [...arr].sort((a, b) => {
    return a[1] === b[1] ? a[0] - b[0] : a[1] - b[1];
  });

  for (let i = 0; i < sorted.length; i++) {
    const next = sorted[i];
    const [next_s] = next;

    if (stack.length <= 0 || next_s >= stack[stack.length - 1][1]) {
      stack.push(next);
    }
  }

  return stack.length;
}

console.log(
  solution([
    [1, 4],
    [2, 3],
    [3, 5],
    [4, 6],
    [5, 7],
  ])
);
console.log(
  solution([
    [3, 3],
    [1, 3],
    [2, 3],
  ])
);

// 어떤 구간의 나열 --> greedy는 생각하기 쉬운데
// 정렬 기준을 잘 생각해봐야 한다.

// 위 문제에서는 끝나는 지점을 정렬의 우선순위로 생각할 수 있어야 한다.
