function solution(arr = []) {
  let max = Number.MIN_SAFE_INTEGER;
  let sum_d_1 = 0;
  let sum_d_2 = 0;

  for (let i = 0; i < arr.length; i++) {
    let sum_h = 0;
    let sum_v = 0;

    for (let j = 0; j < arr[i].length; j++) {
      sum_h += arr[i][j];
      sum_v += arr[j][i];

      if (i === j) {
        sum_d_1 += arr[i][j];
      } else if (i + j === arr.length) {
        sum_d_2 += arr[i][j];
      }
    }

    const temp_max = Math.max(sum_h, sum_v);
    if (max <= temp_max) {
      max = temp_max;
    }
  }

  return Math.max(max, sum_d_1, sum_d_2);
}

console.log(
  solution([
    [10, 13, 10, 12, 15],
    [12, 39, 30, 23, 11],
    [11, 25, 50, 53, 15],
    [19, 27, 29, 37, 27],
    [19, 13, 30, 13, 19],
  ])
);
