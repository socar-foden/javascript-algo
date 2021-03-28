function solution(...args) {
  const odds = args.filter((num) => num % 2 === 1).sort((a, b) => a - b);
  let sum = 0;
  odds.forEach((num) => (sum += num));

  return [sum, odds[0]];
}

console.log(solution(12, 77, 38, 41, 53, 92, 85));
