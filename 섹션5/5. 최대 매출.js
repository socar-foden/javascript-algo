// [풀이 보고나서]
function solution(m, arr = []) {
  let max = Number.MIN_SAFE_INTEGER;
  let sum = 0;

  for (let i = 0; i < m; i++) {
    sum += arr[i];
  }
  max = Math.max(max, sum);

  for (let i = m; i < arr.length; i++) {
    sum += arr[i];
    sum -= arr[i - m];
    max = Math.max(max, sum);
  }

  return max;
}

// [기존 풀이]
// function solution(num, arr = []) {
//   return Math.max(
//     ...arr
//       .map((item, i, org_arr) => org_arr[i - 1] + item + org_arr[i + 1])
//       .filter((n) => !isNaN(n))
//   );
// }

console.log(solution(3, [12, 15, 11, 20, 25, 10, 20, 19, 13, 15]));

// 문제 의도와 너무 다르게 풀었음
