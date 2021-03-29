function solution(arr = []) {
  return [arr[0], ...arr.filter((item, i, org_arr) => item > org_arr[i - 1])];
}

console.log(solution([7, 3, 9, 5, 6, 12]));
