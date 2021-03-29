function solution(args = []) {
  const memo = [];
  const saved = (str) => memo.find((item) => item === str);

  for (let s of args) {
    if (!saved(s)) {
      memo.push(s);
    }
  }

  return memo;
}

console.log(solution(["good", "time", "good", "time", "student"]));
