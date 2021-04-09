function solution(arr = []) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    let min = arr[minIndex];

    for (let j = i + 1; j < arr.length; j++) {
      if (min > arr[j]) {
        minIndex = j;
        min = arr[minIndex];
      }
    }

    const temp = arr[minIndex];
    arr[minIndex] = arr[i];
    arr[i] = temp;
  }

  return arr;
}

console.log(solution([13, 5, 11, 7, 23, 15]));

// 풀이에는 minIndex만 사용했다. 그래도 될 거 같다.
