function solution(str = "") {
  let current_std = "";
  let count = 0;
  let result = "";

  (str + " ").split("").forEach((s, i, arr) => {
    count++;

    if (s !== arr[i - 1]) {
      result += current_std + (count === 1 ? "" : count);
      current_std = s;
      count = 0;
    }
  });

  return result;
}

console.log(solution("KKHSSSSSSSE"));
