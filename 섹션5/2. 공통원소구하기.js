// [기존 풀이]
// function solution(arr_1 = [], arr_2 = []) {
//   return arr_1
//     .filter((num_1) => arr_2.find((num_2) => num_2 === num_1))
//     .sort((a, b) => a - b);
// }

// [강의 듣고 난 후]
function solution(arr_1 = [], arr_2 = []) {
  const asc = (a, b) => a - b;
  let p_1 = 0;
  let p_2 = 0;
  arr_1.sort(asc);
  arr_2.sort(asc);
  const result = [];

  while (p_1 < arr_1.length && p_2 < arr_2.length) {
    if (arr_1[p_1] === arr_2[p_2]) {
      result.push(arr_1[p_1]);
      p_1++;
      p_2++;
    } else {
      if (arr_1[p_1] < arr_2[p_2]) {
        p_1++;
      } else {
        p_2++;
      }
    }
  }

  return result;
}

console.log(solution([1, 3, 9, 5, 2], [3, 2, 5, 7, 8]));

// 1.두 배열 합치기와 마찬가지. 복잡도 n으로 구해야한다.
// 2중 for문 돌리기 전에는 투 포인터 생각해보자.
