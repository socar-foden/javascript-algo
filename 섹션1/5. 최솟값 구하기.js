function solution(...args) {
  return args.sort((a, b) => a - b)[0];
}

console.log(solution(5, 3, 7, 11, 2, 15, 17));

// 풀이에는 Number.MIN_SAFE_INTEGER 사용
// Max.min 함수는 매개변수 제한이 없음(2개 이상도 가능)