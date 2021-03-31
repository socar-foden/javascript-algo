function solution(arr = [[]]) {
  const min_map = new Map();

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (!min_map.get(j)) {
        min_map.set(j, Number.MAX_SAFE_INTEGER);
      }

      if (min_map.get(j) >= arr[i][j]) {
        min_map.set(j, arr[i][j]);
      }
    }
  }

  let set_cnt = 0;
  const min_values = [...min_map.values()];

  for (let i = 0; i < min_values.length; i++) {
    const target = min_values[i];
    set_cnt += min_values.filter((min) => target > min).length;
  }

  return set_cnt;
}

console.log(
  solution([
    [3, 4, 1, 2],
    [4, 3, 2, 1],
    [3, 1, 4, 2],
  ])
);

// 풀이는 4중 for문이라 강의 봐야함
