function solution(str = "") {
  const stack = [];
  let answer = "YES";
  const arr = str.split("");

  for (let i = 0; i < arr.length; i++) {
    const s = arr[i];

    if (s === "(") {
      stack.push(s);
    } else {
      if (stack.length > 0) {
        stack.pop();
      } else {
        answer = "NO";
        return answer;
      }
    }
  }

  if (stack.length > 0) {
    answer = "NO";
  }

  return answer;
}

console.log(solution("(()(()))(()"));
