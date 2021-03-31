function solution(str = "") {
  const memo = [];

  return str
    .split("")
    .map((s) => {
      const saved = (text) => memo.find((item) => item === text);

      if (saved(s)) {
        return "";
      } else {
        memo.push(s);
        return s;
      }
    })
    .join("");
}

console.log(solution("ksekkset"));

// 풀이에서는 indexOf가 가장 앞선 인덱스를 반환하는 것을 이용했다.
// 괜찮아보인다.
