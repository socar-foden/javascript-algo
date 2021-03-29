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
