function solution(str = "") {
  const stack = [];
  let sum = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      stack.push(str[i]);
    } else {
      stack.pop();

      if (str[i - 1] === "(") {
        sum += stack.length;
      } else {
        sum += 1;
      }
    }
  }

  return sum;
}

console.log(solution("()(((()())(())()))(())"));
console.log(solution("(((()(()()))(())()))(()())"));
