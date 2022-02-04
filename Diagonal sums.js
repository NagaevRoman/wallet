solution = function (matrix) {
  let n = matrix.length
  let count = 0;
  for (i = 0; i < n; ++i)
{
    for (j = 0; j < i; ++j)
    {
     count += matrix[i][j];
    }
}
  return count
};

console.log(solution([[1,2,3],[4,5,6],[7,8,9]]));