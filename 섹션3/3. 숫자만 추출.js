function solution(str = "") {
  return parseInt(
    str
      .split("")
      .filter((s) => s.charCodeAt() >= 48 && s.charCodeAt() <= 57)
      .join("")
  );
}

console.log(solution("g0en2T0s8eSoft"));

// 풀이에서는 검사할 때 (ES5의)isNaN을 사용했다. (ES6의 Number.isNaN X)
// 마지막 parseInt는 동일
