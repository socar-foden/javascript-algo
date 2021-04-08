// [풀이보고 다시 품]
function solution(n, k) {
  let queue = [];

  for (let i = 0; i < n; i++) {
    queue.push(i + 1);
  }

  while (queue.length > 1) {
    let i = 0;

    while (i < k - 1) {
      queue.push(queue.shift());
      i++;
    }

    queue.shift();
  }

  return queue.shift();
}

// [내 풀이]
// function solution(n, k) {
//   let stack = [];
//   const std = k;

//   for (let i = 0; i < n; i++) {
//     stack.push(i + 1);
//   }

//   while (stack.length > 1) {
//     while (stack.length < k) {
//       k -= stack.length;
//     }

//     stack = [...stack.slice(0, k - 1), ...stack.slice(k)];
//     k += std - 1;
//     console.log(stack, k);
//   }

//   return stack.pop();
// }

console.log(solution(8, 3));

// 풀이는 queue 개념을 사용
// 다음번 인덱스를 배열의 길이와 일일이 계산해서 구하는게 아니라
// queue.push(queue.shift())를 사용해 계속 새로 갈아끼워줌

// 원형의 체인형태의 문제를 볼땐 queue.push(queue.shift()) 개념 생각하자
