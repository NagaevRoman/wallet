solution = function (pocketStr) {

  if ((/\+/i).test(pocketStr.split(' '))){
    let num = pocketStr.split(' + ').map(el => +el.replace(/[^0-9]/g, '')).reduce((acc, el)=> acc + el
    ).toString();
      return  (num > 100) ? `${num.slice(0, -2)}бун ` + `${num.slice(-2)}коп` : `${parseInt(num/100)}бун ` + `${num}коп`
   }

   if ((/\-/i).test(pocketStr.split(' '))){
    let num = pocketStr.split(' - ').map(el => +el.replace(/[^0-9]/g, '')).reduce((acc, el)=> acc - el
    ).toString();
      return  (num > 100) ? `${num.slice(0, -2)}бун ` + `${num.slice(-2)}коп` : `${parseInt(num/100)}бун ` + `${num}коп`
   }
  

  }

  

// console.log(pocketStr.split(" + ").map((val) => {
//   return val.replace(/[^0-9]/g, '') 
//  }));



// }
  // pocketStr.split(' ').map((val) => {
  //   if (+val.slice(0, -3) !== byn && +val.slice(0, -3) !== kop) {
      
  //     if (val !== '+') {
  //       console.log(val);
        //  byn = byn + +(/.бун/i.test(val) ? val.slice(0, -3) : 0)
        //  kop = kop + +(/.коп/i.test(val) ? val.slice(0, -3) : 0)
  //     } else if (val !== '-') {
  //       byn = byn + +(/.коп/i.test(val) ? val.slice(0, -3) : 0)
  //        kop = kop + +(/.бун/i.test(val) ? val.slice(0, -3) : 0)
  //     }
      
  //   }
    
    // if (val !== "+" && val !== '-') {
        
    // }


    // let symb = val[i] === "+" ? "+" : "-"
    // if (/.бун/gi.test(val)) {
    //   byn = byn + symb +val.slice(0, -3);
    // } else if (/.коп/gi.test(val)) {
    //   kop += +val.slice(0, -3);
    // }
    // console.log(byn);
  // }
//   console.log( kop);
//   console.log(pocketStr); 
// }
  // (i + 1) % 3 === 0

  // });
  // if (kop > 99) {
  //   byn += +Math.trunc(kop/100)
  //   kop = kop - 100
  // } 
// console.log(pocketStr.split(' + ').map(el => +el.replace(/[^0-9]/g, '')));



// console.log( pocketStr.split(' + '));


console.log(solution('5бун 55коп - 4бун 65коп'));


//  для поиска знака нужно индекс +1 поделить на 3 === 0

// const numbers = (1800, 50, 300, 20, 100); // subtract all numbers from first number // since 1st element is called as accumulator rather than currentValue // 1800 - 50 - 300 - 20 - 100 
// let difference = numbers.reduce( (accumulator, currentValue) => accumulator - currentValue ); console.log(difference);