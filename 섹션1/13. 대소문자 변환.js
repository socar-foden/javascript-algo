function solution(str = "") {
  const isUpper = (charCode) => charCode >= 65 && charCode <= 90;
//   const isLower = (charCode) => charCode >= 97 && charCode <= 122;

  return str
    .split("")
    .map((item) =>
      isUpper(item.charCodeAt()) ? item.toLowerCase() : item.toUpperCase()
    )
    .join("");
}

console.log(solution("StuDY"));

// 풀이는 기존 문자열과 대문자로 변환된(toUpperCase)를 비교한다.
// 그게 더 맞는 것 같다.