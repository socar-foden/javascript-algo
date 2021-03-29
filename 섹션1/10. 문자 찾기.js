function solution(str = "", s) {
  return str.split("").filter((item) => item === s).length;
}

console.log(solution("COMPUTERPROGRAMMING", "R"));

// 풀이는 split의 결과 - 1로 조금 더 간단하게 구했다.