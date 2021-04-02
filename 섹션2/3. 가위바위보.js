function solution(arr_1 = [], arr_2 = []) {
  // 1. 가위
  // 2. 바위
  // 3. 보
  const result = [];

  for (let i = 0; i < arr_1.length; i++) {
    const a = arr_1[i];
    const b = arr_2[i];

    if ((a === 2 && b === 1) || (a === 3 && b === 2) || (a === 1 && b === 3)) {
      result.push("A");
    } else if (
      (b === 2 && a === 1) ||
      (b === 3 && a === 2) ||
      (b === 1 && a === 3)
    ) {
      result.push("B");
    } else {
      result.push("D");
    }
  }

  return result;
}

const a = [2, 3, 3, 1, 3];
const b = [1, 1, 2, 2, 3];
console.log(solution(a, b));

// 풀이는 비길 경우는 먼저 상단에서 return하고, b가 이길 경우를 else로 간단하게 처리해두었다.
// 지저분한 b가 이기는 조건이 사라짐
