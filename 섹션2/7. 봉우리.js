function solution(arr = []) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      const target = arr[i][j];
      const l = arr[i - 1]?.[j] || 0;
      const r = arr[i + 1]?.[j] || 0;
      const t = arr[i]?.[j + 1] || 0;
      const b = arr[i]?.[j - 1] || 0;

      if (![l, r, t, b].find((around) => around > target)) {
        count++;
      }
    }
  }

  return count;
}

console.log(
  solution([
    [5, 3, 7, 2, 3],
    [3, 7, 1, 6, 1],
    [7, 2, 5, 3, 4],
    [4, 3, 6, 4, 1],
    [8, 7, 3, 5, 2],
  ])
);
