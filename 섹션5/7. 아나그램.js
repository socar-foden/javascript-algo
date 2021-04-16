// [풀이 본 후]
function solution(str_1 = "", str_2 = "") {
  const map = new Map();

  for (let i = 0; i < str_1.length; i++) {
    const key = str_1[i];
    const org = map.get(key);

    if (org) {
      map.set(key, org + 1);
    } else {
      map.set(key, 1);
    }
  }

  for (let i = 0; i < str_2.length; i++) {
    const key = str_2[i];
    const org = map.get(key);

    // 풀이에서는 org <= 0 || !org로 간소화하긴 했다.
    if (org) {
      if (org <= 0) {
        return "NO";
      } else {
        map.set(key, org - 1);
      }
    } else {
      return "NO";
    }
  }

  return "YES";
}

// [기존 풀이]
// function solution(str_1 = "", str_2 = "") {
//   const sorted_1 = str_1.split("").sort();
//   const sorted_2 = str_2.split("").sort();

//   return sorted_1.every((s, i) => s === sorted_2[i]) ? "YES" : "NO";
// }

console.log(solution("AbaAeCe", "baeeACA"));
console.log(solution("abaCC", "Caaab"));

// 풀이는 해쉬, 강의보기
