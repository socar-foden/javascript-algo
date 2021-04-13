// [풀이 본 후]
function solution(arr = []) {
  const sorted = [...arr].sort((a, b) => a - b);
  const result = [];

  for (let i = 0; i < sorted.length; i++) {
    if (arr[i] !== sorted[i]) {
      result.push(i + 1);
    }
  }

  return result;
}

// [기존 풀이] --> 해결 못함
// function solution(arr = []) {
//    let friendIndex;
//    let cIndex;

//   for (let i = arr.length - 1; i >= 0; i--) {
//    if (arr[i] < arr[i - 1]) {
//       friendIndex = i;
//       break;
//    }
//   }

//   return friendIndex + 1;
// }

console.log(solution([120, 125, 152, 130, 135, 135, 143, 127, 160]));
console.log(solution([120, 130, 150, 150, 130, 150]));

// 풀이에서는 그냥 sort 사용함
