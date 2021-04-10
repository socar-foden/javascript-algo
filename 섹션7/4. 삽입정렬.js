function solution(arr = []) {
  for (let i = 0; i < arr.length; i++) {
    const key = arr[i];
    let count = 0;

    for (let j = i - 1; j >= 0; j--) {
      if (key < arr[j]) {
        count++;
        arr[j + 1] = arr[j];
      }
    }

    arr[i - count] = key;
  }

  return arr;
}

console.log(solution([11, 7, 5, 6, 10, 9]));

// 풀이에는 j를 한 블럭 스코프 밖에 선언해서 count 필요없게
