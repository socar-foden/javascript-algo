function solution(str = "", std = "") {
  let result = [];

  for (let i = 0; i < str.length; i++) {
    let l = 0;
    let l_find = false;
    let r = 0;
    let r_find = false;

    if (str[i] === std) {
      result.push(0);
      continue;
    }

    for (let j = i - 1; j > -1; j--) {
      l++;

      if (str[j] === std) {
        l_find = true;
        break;
      }
    }

    for (j = i + 1; j < str.length; j++) {
      r++;

      if (str[j] === std) {
        r_find = true;
        break;
      }
    }

    if (!l_find) {
      l = Number.MAX_SAFE_INTEGER;
    }

    if (!r_find) {
      r = Number.MAX_SAFE_INTEGER;
    }

    result.push(Math.min(l, r));
  }

  return result;
}

console.log(solution("teachermode", "e"));

// 너무 길다. 강의 보기
// 복잡도 n^2으로 푸는게 아니라, n으로 풀어야 한다.
// ---> 로 한번 돌면서 기준문자 t와의 '왼쪽' 방향 최소 거리 배열을 구하고
// <--- 로 한번 돌면서 '오른쪽' 방향 최소거리를 구하면서
// 바로 답을 구한다.
