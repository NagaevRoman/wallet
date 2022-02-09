solution = function (strArr) {
  let sum = 0;
  strArr.forEach(item => {
    
    if (typeof item === 'string') {
      let arr = item.split(' ').map(el => el * 1) 
      sum += Math.min(...arr)
    }
    
});
  return sum
}
console.log(solution(["20 1 50 12 3", null, undefined, "5 4 3 2 1", {}, 700]));

//Ожидаемый результат: 100.

// return strArr.map(el => {
//   return +el.split(' ').sort()[0]
//  }).reduce((acc, val) => acc + val)

// let number = parseInt(item);

// return isNaN(number)? item : number;