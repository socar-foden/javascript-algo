function solution(...args) {
  let min = 100;

  args.forEach((num) => min >= num && (min = num));
  return min;
}

console.log(solution(6, 5, 11));
