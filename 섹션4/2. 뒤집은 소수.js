function solution(arr = []) {
  const formatted_arr = arr.map((n) =>
    parseInt((n + "").split("").reverse().join(""))
  );

  const is_sosu = (n) => {
    let cnt = 0;

    for (let i = 1; i <= n; i++) {
      if (n % i === 0) {
        cnt++;
      }

      if (cnt > 2) {
        break;
      }
    }

    return cnt === 2;
  };

  return formatted_arr.filter((n) => is_sosu(n));
}

console.log(solution([32, 55, 62, 20, 250, 370, 200, 30, 100]));

// 풀이
// 소수 검사는 제곱근(Math.sqrt)까지만 돌면 된다. 그 이상은 불필요함
