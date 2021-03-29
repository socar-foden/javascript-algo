function solution(day_one, numbers_two = []) {
  return numbers_two.filter((num) => num.toString()[1] == day_one).length;
}

console.log(solution(3, [25, 23, 11, 47, 53, 17, 33]));
console.log(solution(0, [12, 20, 54, 30, 87, 91, 30]));

// 풀이에는 나머지로 되어있음. 그게 더 맞는 거 같다.
