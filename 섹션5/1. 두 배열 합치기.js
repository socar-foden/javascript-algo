// [기존 풀이]
// function solution(arr_1 = [], arr_2 = []) {
//   return [...arr_1, ...arr_2].sort((a, b) => a - b);
// }

// [강의듣고 구현해 봄]
function solution(arr_1 = [], arr_2 = []) {
  const result = [];
  let p_1 = 0;
  let p_2 = 0;

  while (p_1 < arr_1.length || p_2 < arr_2.length) {
    if (arr_1[p_1] < arr_2[p_2]) {
      result.push(arr_1[p_1]);
      p_1++;
    } else {
      result.push(arr_2[p_2]);
      p_2++;
    }
  }

  return result;
}

console.log(solution([1, 3, 5], [2, 3, 6, 7, 9]));

// 풀이내용
// sort는 N * logN이라 더 좋은 방법으로 해야한다.
// 2 pointer 알고리즘으로 시간 복잡도 n으로 가능

// 알고리즘 풀때는 내장함수 사용하기 전에 생각좀 해보자.
