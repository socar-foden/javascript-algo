// [풀이 보고 나서]
function solution(n, arr = []) {
  let count = 0;
  let lt = 0;
  let sum = 0;

  for (let rt = 0; rt < arr.length; rt++) {
    sum += arr[rt];
    if (sum === n) {
      count++;
    }

    while (sum >= n) {
      lt++;
      sum -= arr[lt];
      if (sum === n) count++;
    }
  }

  return count;
}

// 6, [1, 2, 1, 3, 1, 1, 1, 2]

// [기존 풀이]
// function solution(num, arr = []) {
//   let count = 0;

//   for (let i = 0; i < arr.length; i++) {
//     let sum = arr[i];

//     for (let j = i + 1; j < arr.length; j++) {
//       sum += arr[j];

//       if (sum === num) {
//         count++;
//         break;
//       }
//     }
//   }

//   return count;
// }

console.log(solution(6, [1, 2, 1, 3, 1, 1, 1, 2]));

// rt를 루프의 기준으로 잡는 걸 생각할수 있어야 한다.
