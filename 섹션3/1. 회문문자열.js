function solution(str = "") {
  const lower_arr = str.toLowerCase().split("");
  let err_count = 0;

  for (let i = 0; i < parseInt(lower_arr.length / 2); i++) {
    if (lower_arr[i] !== lower_arr[lower_arr.length - 1 - i]) {
      err_count++;
      break;
    }
  }

  if (err_count > 0) {
    return "NO";
  }

  return "YES";
}

console.log(solution("gooG"));

// 풀이에는
// err_count라는 변수를 특별히 두지 않았다. for -> 조건 불만족시 바로 NO 리턴
// (문자 변환후) 뒤집은 문자열과 원본 문자열을 비교하는 방법도 있다.
