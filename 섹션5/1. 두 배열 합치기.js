function solution(arr_1 = [], arr_2 = []) {
  return [...arr_1, ...arr_2].sort((a, b) => a - b);
}

console.log(solution([1, 3, 5], [2, 3, 6, 7, 9]));
