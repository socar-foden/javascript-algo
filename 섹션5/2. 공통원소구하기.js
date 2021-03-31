function solution(arr_1 = [], arr_2 = []) {
  return arr_1
    .filter((num_1) => arr_2.find((num_2) => num_2 === num_1))
    .sort((a, b) => a - b);
}

console.log(solution([1, 3, 9, 5, 2], [3, 2, 5, 7, 8]));
