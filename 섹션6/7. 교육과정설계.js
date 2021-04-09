function solution(str_1 = "", str_2 = "") {
  const queue = [];

  for (let i = 0; i < str_1.length; i++) {
    queue.push(str_1[i]);
  }

  for (let i = 0; i < str_2.length; i++) {
    if (queue[0] === str_2[i]) {
      queue.shift();
    }
  }

  return queue.length === 0 ? "YES" : "NO";
}

console.log(solution("CBA", "CBDAGE"));
