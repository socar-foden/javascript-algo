function solution(num, arr = []) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    let sum = arr[i];

    for (let j = i + 1; j < arr.length; j++) {
      sum += arr[j];

      if (sum === num) {
        count++;
        break;
      }
    }
  }

  return count;
}

console.log(solution(6, [1, 2, 1, 3, 1, 1, 1, 2]));

// 풀이는 안쪽 반복은 while로 해서 break X