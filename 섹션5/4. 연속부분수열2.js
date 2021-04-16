// [풀이 보고 난 후]
function solution(n, arr = []) {
  let count = 0;
  let sum = 0;
  let lt = 0;

  for (let rt = 0; rt < arr.length; rt++) {
    sum += arr[rt];
    if (sum <= n) {
      count++;
    }

    while (sum >= n) {
      lt++;
      sum -= arr[lt];
      count += lt;
    }
  }

  return count;
}

// 1 -> o
// 1 3 -> o
// 1 3 1 -> o
// 1 3 1 2 -> x
//   3 1 2 -> x
//   3 1 -> o
//   3 -> o
//     1 -> o
//     1 2 -> o
//     1 2 3 -> x
//       2 3 -> o
//         3 -> o

// [기존 풀이]
// function solution(num, arr = []) {
//   let count = 0;

//   for (let i = 0; i < arr.length; i++) {
//     let sum = arr[i];
//     let sub_count = 0;
//     let j = i;

//     while (sum <= num) {
//       j++;
//       sum += arr[j];
//       sub_count++;
//     }

//     count += sub_count;
//   }

//   return count;
// }

console.log(solution(5, [1, 3, 1, 2, 3]));

// 풀의 강의 봐야함
// 내가 푼 방식이 투 포인터 알고리즘의 개념과 같긴 한거 같다. --> X
// 투 포인터 알고리즘의 핵심은 복잡도가 n이라는데 의의가 있다.
