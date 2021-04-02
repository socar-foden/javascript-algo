function solution(arr = []) {
  return [...arr]
    .sort((a, b) => b - a)
    .map((n) => arr.findIndex((item) => item === n) + 1);
}

console.log(solution([87, 89, 92, 100, 76]));

// 풀이에서는 이중 for문으로 복잡도가 더 작다.
// 하나 기준으로 돌면서 등수를 바로 구해서 결과에 넣는다.
