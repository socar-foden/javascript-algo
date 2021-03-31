function solution(str = "") {
  const map = new Map();

  str.split("").forEach((s) => {
    if (!map.has(s)) {
      map.set(s, 0);
    }

    map.set(s, map.get(s) + 1);
  });

  const max = Math.max(...map.values());

  return [...map].find(([key, value]) => value === max)[0];
}

console.log(solution("BACBACCACCBDEDE"));
