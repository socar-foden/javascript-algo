function solution(str = "") {
  let result = 0;
  const stack = [];

  for (let i = 0; i < str.length; i++) {
    const target = str[i];
    const prev_1 = str[i - 1];

    if (["+", "-", "*", "/"].find((item) => item === target)) {
      if (target === "+") {
        stack.push(stack.pop() + stack.pop());
      } else if (target === "-") {
        stack.push(-(stack.pop() - stack.pop()));
      } else if (target === "*") {
        stack.push(stack.pop() * stack.pop());
      } else {
        stack.push(1 / (stack.pop() / stack.pop()));
      }
    } else {
      stack.push(parseInt(target));
    }
  }

  return stack.pop();
}

console.log(solution("352+*9-"));

// 풀이에는
// 1. isNaN으로 숫자형 판별 --> 이게 맞는거 같다. 내껀 find로 루프 돔
// 2. lt, rt라는 변수를 사용해 연산식을 좀 더 간결하게 표현

// stack을 사용하지 않으면, 최초 값의 유무에 따라 분기처리를 해줘야 하는데, 의도에는 맞게 푼 거 같다.
