solution = function (string1, string2) {
  if (!Number(string1) || !Number(string2)) {
    return 'Err, PLS  entr num'
  } else if (!(typeof string1) === "string" || !(typeof string2) === "string")  {
    return 'Error, pls enetr str';
  } else {
    console.log(string1.stringify);
    return (Number(string1) + Number(string2)).toString();
  }
};
// console.log(typeof 10n);
console.log(solution("4000n", "4000n"));