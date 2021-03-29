function solution(arr = []) {
  return [...arr]
    .sort((a, b) => b - a)
    .map((n) => arr.findIndex((item) => item === n) + 1);
}

console.log(solution([87, 89, 92, 100, 76]));
