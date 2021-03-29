function solution(str = "") {
  return str
    .split("")
    .filter((s) => s.charCodeAt() >= 65 && s.charCodeAt() <= 90).length;
}

console.log(solution("KoreaTimeGood"));
