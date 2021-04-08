function solution(board = [], moves = []) {
  let count = 0;
  const stack = [];

  for (let i = 0; i < moves.length; i++) {
    for (let j = 0; j < board.length; j++) {
      const c = moves[i] - 1;

      if (board[j][c] !== 0) {
        stack.push(board[j][c]);
        board[j][c] = 0;

        if (stack[stack.length - 1] === stack[stack.length - 2]) {
          count += 2;
          stack.pop();
          stack.pop();
        }

        break;
      }
    }
  }

  return count;
}

console.log(
  solution(
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1],
    ],
    [1, 5, 3, 5, 1, 2, 1, 4]
  )
);
