solution = function (x) {
  if (!Number.isInteger(x)) {
    return 'Error, pls enetr num'
  }
    let sum = 0;
    for (let i = 1; i <= x; i++) {
      sum += i
    }
   return sum
};

console.log(solution(4));