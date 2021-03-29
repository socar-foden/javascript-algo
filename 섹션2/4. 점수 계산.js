function solution(arr = []) {
  let sum = 0;
  let continuity = 0;

  arr.forEach((n) => {
    if (n === 1) {
      continuity++;
      sum += continuity;
    } else {
      continuity = 0;
    }
  });

  return sum;
}

console.log(solution([1, 0, 1, 1, 1, 0, 0, 1, 1, 0]));
