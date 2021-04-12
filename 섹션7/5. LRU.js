function solution(s, arr = []) {
  let cache = [];

  for (let i = 0; i < s; i++) {
    cache.push(0);
  }

  for (let i = 0; i < arr.length; i++) {
    const next = arr[i];
    const org = cache.find((item) => item === next);

    if (org) {
      const orgIndex = cache.findIndex((item) => item === next);

      cache = [next, ...cache.slice(0, orgIndex), ...cache.slice(orgIndex + 1)];
    } else {
      cache = [next, ...cache.slice(0, s - 1)];
    }
  }

  return cache;
}

console.log(solution(5, [1, 2, 3, 2, 6, 2, 3, 5, 7]));

// 풀이에서는 array api를 사용하지 않았다.
// 그리고 어차피 원본 cache를 변경하니간 splice를 사용했음
