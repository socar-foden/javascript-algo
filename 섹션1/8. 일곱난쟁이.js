function solution(arr = []) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      const copy = [...arr];
      copy[i] = 0;
      copy[j] = 0;
      const testArr = copy.filter((n) => n !== 0);
      let sum = 0;

      testArr.forEach((n) => (sum += n));
      if (sum === 100) {
        return testArr;
      }
    }
  }
}

console.log(solution([20, 7, 23, 19, 10, 15, 25, 8, 13]));

// 풀이에는 sum 구할때 reduce 사용
// + splice로 배열을 실제로 자른다.