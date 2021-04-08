function solution(str = "") {
  const result = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === ")") {
      while (result[result.length - 1] !== "(") {
        result.pop();
      }

      if (result[result.length - 1] === "(") {
        result.pop();
      }
    } else {
      result.push(str[i]);
    }
  }

  return result.join("");
}

console.log(solution("(A(BC)D)EF(G(H)(IJ)K)LM(N)"));
