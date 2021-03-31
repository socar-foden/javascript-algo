function solution(k, arr = []) {
  const sorted = arr.sort((a, b) => b - a);
  let cnt = 0;

  for (let i = 0; i < sorted.length; i++) {
    for (let j = i + 1; j < sorted.length; j++) {
      for (let k = j + 1; k < sorted.length; k++) {
        cnt++;

        if (cnt >= 3) {
          return [sorted[i] + sorted[j] + sorted[k]];
        }
      }
    }
  }
}

console.log(solution(3, [13, 15, 34, 23, 45, 65, 33, 11, 26, 42]));

// 풀이도 3중 for문. + sort를 나중에 함..????? 강의 봐야함
