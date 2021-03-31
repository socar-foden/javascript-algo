function solution(num, arr = []) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    let sum = arr[i];
    let sub_count = 0;
    let j = i;

    while (sum <= num) {
      j++;
      sum += arr[j];
      sub_count++;
    }

    count += sub_count;
  }

  return count;
}

console.log(solution(5, [1, 3, 1, 2, 3]));

// 풀의 강의 봐야함
