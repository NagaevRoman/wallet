solution = function (arr) {

  if (Array.isArray(arr)) {
    if (!arr.length) {
      return false
    }
    const arrFilt = arr.filter(val => Number.isInteger(val))
    console.log(arrFilt);
    return Number.isInteger(arrFilt.reduce((acc, el) =>  (acc + el))/ arrFilt.length)
  }
  
};

console.log(solution([9, 2, '2', 5]));

// return arr.map((val, i) => (Number.isInteger(val)) ? val : arr.splice(i, 1))

// return Number.isInteger(arr.map(val => (typeof(val) === 'number') ? val : 0).reduce((acc, el) =>  (acc + el))/ arr.length)
// }