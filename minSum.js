solution = function (strArr) {
  return strArr.map(el => {
   return +el.split(' ').sort()[0]
  }).reduce((acc, val) => acc + val)
};

console.log(solution([ "1 2 22 55 63", "2 5 0", "3 0 0", "99 99 99 999 99999 999 999 99", "0 0 0 0 0", ]));

//Ожидаемый результат: 100.