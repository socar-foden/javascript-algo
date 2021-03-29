function solution(str = "") {
  return str
    .split("")
    .map((s) => (s === "A" ? "#" : s))
    .join("");
}

console.log(solution("BANANA"));
