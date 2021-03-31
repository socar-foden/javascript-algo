function solution(str_1 = "", str_2 = "") {
  const sorted_1 = str_1.split("").sort();
  const sorted_2 = str_2.split("").sort();

  return sorted_1.every((s, i) => s === sorted_2[i]) ? "YES" : "NO";
}

console.log(solution("AbaAeCe", "baeeACA"));
console.log(solution("abaCC", "Caaab"));

// 풀이는 해쉬, 강의보기
