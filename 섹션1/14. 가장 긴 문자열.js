function solution(args = []) {
  return args.sort((a, b) => b.length - a.length)[0];
}

console.log(solution(["teacher", "time", "student", "beautiful", "good"]));
