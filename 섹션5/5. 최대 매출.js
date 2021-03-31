function solution(num, arr = []) {
  return Math.max(
    ...arr
      .map((item, i, org_arr) => org_arr[i - 1] + item + org_arr[i + 1])
      .filter((n) => !isNaN(n))
  );
}

console.log(solution(3, [12, 15, 11, 20, 25, 10, 20, 19, 13, 15]));
