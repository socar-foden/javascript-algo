function solution(str = "") {
  const isAlphabet = (charCode) =>
    (charCode >= 97 && charCode <= 122) || (charCode >= 65 && charCode <= 90);

  const only_strs = str
    .toLowerCase()
    .split("")
    .filter((s) => isAlphabet(s.charCodeAt()));

  for (let i = 0; i < parseInt(only_strs.length / 2); i++) {
    if (only_strs[i] !== only_strs[only_strs.length - 1 - i]) {
      return "NO";
    }
  }

  return "YES";
}

console.log(solution("found7, time: study; Yduts; emit, 7Dnuof"));
