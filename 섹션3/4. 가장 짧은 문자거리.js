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
