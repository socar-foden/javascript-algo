function solution(arr = [[]]) {
  const formatted = [];

  for (let i = 0; i < arr.length; i++) {
    const next = arr[i];

    formatted.push([next[0], "s"]);
    formatted.push([next[1], "e"]);
  }

  formatted.sort(([a, b], [c, d]) =>
    a === c ? b.charCodeAt() - d.charCodeAt() : a - c
  );

  let cnt = 0;
  let max = 0;

  for (let i = 0; i < formatted.length; i++) {
    const [time, str] = formatted[i];

    if (str === "s") {
      cnt++;
    } else {
      cnt--;
    }

    max = Math.max(cnt, max);
  }

  return max;
}

console.log(
  solution([
    [14, 18],
    [12, 15],
    [15, 20],
    [20, 30],
    [5, 14],
  ])
);

// 입, 출 구분하고, 입 = +, 출 = - 가 핵심로직
