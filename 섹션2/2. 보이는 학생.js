function solution(arr = []) {
  let currentMax = Number.MIN_SAFE_INTEGER;
  let count = 0;

  for (let item of arr) {
    if (item > currentMax) {
      count++;
      currentMax = item;
    }
  }

  return count;
}

console.log(solution([130, 135, 148, 140, 145, 150, 150, 153]));
