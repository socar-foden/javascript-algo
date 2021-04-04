function solution(arr = []) {
  const sum_arr = [];
  let max = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < arr.length; i++) {
    const str = arr[i];
    let current_sum = 0;

    (str + "").split("").forEach((s) => (current_sum += parseInt(s)));

    if (max <= current_sum) {
      max = current_sum;
    }

    sum_arr.push({ str, sum: current_sum });
  }

  return sum_arr
    .filter(({ sum }) => sum === max)
    .sort((a, b) => parseInt(b.str) - parseInt(a.str))[0].str;
}

console.log(solution([128, 460, 603, 40, 521, 137, 123]));

// 너무 장황함, 무조건 고쳐야 하는 로직
// 9번라인을 2번 풀이처럼 reduce 사용해도 좋아보임 
//      ---> 1번 풀이: 10으로 계속 나눠서 더함
// 그리고 풀이에서는 답인 경우도 같은 루프에서 체크
