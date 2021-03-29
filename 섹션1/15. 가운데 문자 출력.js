function solution(str = "") {
  const centerIndex = parseInt(str.length / 2);
  const isOdd = str.length % 2 === 1;
  return isOdd
    ? str.slice(centerIndex, centerIndex + 1)
    : str.slice(centerIndex - 1, centerIndex + 1);
}

console.log(solution("study"));
console.log(solution("good"));
