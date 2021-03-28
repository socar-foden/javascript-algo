function solution(...args) {
  const sorted = args.sort((a, b) => a - b);
  return sorted[0] + sorted[1] > sorted[2] ? "YES" : "NO";
}

console.log(solution(6, 7, 11));
console.log(solution(13, 33, 17));

// 해설에서는 max값만 찾는데 집중한다.