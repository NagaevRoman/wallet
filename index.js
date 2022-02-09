// solution = function (pocketStr) {

//    if ((/\+/i).test(pocketStr.split(' '))){
//     let num = pocketStr.split(' + ').map(el => {

//        return (/.коп/gi.test(el)) ? 
//         +el.replace(/[^0-9]/g, '') : 
//         +(el.replace(/[^0-9]/g, '') +"00")

//     }).reduce((acc, el)=> acc + el
//     )/100
//     console.log(Math.round((num.toFixed(2))));
//       return   `${Math.trunc((num.toFixed(2)))}бун ` + `${num.toFixed(2) -Math.round((num.toFixed(2)))}коп` 
//    } else {
//     let num = pocketStr.split(' - ').map(el => {

//       return (/.коп/gi.test(el)) ? 
//        +el.replace(/[^0-9]/g, '') : 
//        +(el.replace(/[^0-9]/g, '') +"00")

//    }).reduce((acc, el)=> acc - el
//    ).toString();
//      return  (num > 100) ? `${num.slice(0, -2)}бун ` + `${num.slice(-2)}коп` : `${parseInt(num/100)}бун ` + `${num}коп`
//    }


//   }

solution = function (pocketStr) {  

  let byn = 0;
  let kop = 0;


  pocketStr.split(' ').forEach(el => {
    if (/.коп/gi.test(el)) {
      kop += +el.replace(/[^0-9]/g, '')
      if (kop >= 100) {
        byn += 1
        kop -= 100
      }
    }
    if (/.бун/gi.test(el)) {
      byn += +el.replace(/[^0-9]/g, '')
    }
  })
  return `${byn}бун ` + `${kop}коп`
}
console.log(solution('1бун + 1бун'));

  // if ((/\+/i).test(pocketStr.split(' '))){
  //  let num = pocketStr.split(' + ').map(el => {

  //       console.log(el.replace(/[^0-9]/g, '').length);
  //       // if (el.length === 2) {
  //       //   console.log(el);
  //       // }
        
  //       if (/.коп/gi.test(el)) {
  //         return +el.replace(/[^0-9]/g, '')
  //       } else {
  //         return +(el.replace(/[^0-9]/g, '') +"00")
  //       }

  //     // return (/.коп/gi.test(el)) ? 
  //     //  +el.replace(/[^0-9]/g, '') : 
  //     //  +(el.replace(/[^0-9]/g, '') +"00")

  //  }).reduce((acc, el)=> acc + el
  //  ).toString();
  // //  console.log(num);
  //    return  (num > 100) ? `${num.slice(0, -2)}бун ` + `${num.slice(-2)}коп` : `${parseInt(num/100)}бун ` + `${num}коп`

  // } else {
  //  let num = pocketStr.split(' - ').map(el => {

  //    return (/.коп/gi.test(el)) ? 
  //     +el.replace(/[^0-9]/g, '') : 
  //     +(el.replace(/[^0-9]/g, '') +"00")

  // }).reduce((acc, el)=> acc - el
  // ).toString();
  //   return  (num > 100) ? `${num.slice(0, -2)}бун ` + `${num.slice(-2)}коп` : `${parseInt(num/100)}бун ` + `${num}коп`
  // }



   


  //  if ((/\-/i).test(pocketStr.split(' '))){
  //   let num = pocketStr.split(' - ').map(el => +el.replace(/[^0-9]/g, '')).reduce((acc, el)=> acc - el
  //   ).toString();
  //     return  (num > 100) ? `${num.slice(0, -2)}бун ` + `${num.slice(-2)}коп` : `${parseInt(num/100)}бун ` + `${num}коп`
  //  }
  

  // }

  

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





//  для поиска знака нужно индекс +1 поделить на 3 === 0

// const numbers = (1800, 50, 300, 20, 100); // subtract all numbers from first number // since 1st element is called as accumulator rather than currentValue // 1800 - 50 - 300 - 20 - 100 
// let difference = numbers.reduce( (accumulator, currentValue) => accumulator - currentValue ); console.log(difference);



// let byn = 0;
// let kop = 0;
// if ((/\+/i).test(pocketStr.split(' '))){
//   spliterPositive(pocketStr);
//   return `${byn}бун ` + `${kop}коп`
// } else if ((/\-/i).test(pocketStr.split(' '))) {
//   spliterPositive(pocketStr.split('-')[0])
//   spliterNegative(pocketStr.split('-')[1])
//   return `${byn}бун ` + `${kop}коп`
// } else {
//   return `${byn}бун ` + `${kop}коп`
// }

// function spliterPositive(str) {
//   str.split(' ').forEach(el => {
//     if (/.коп/gi.test(el)) {
//       kop += +el.replace(/[^0-9]/g, '')
//       if (kop > +el.replace(/[^0-9]/g, '')) {
//         byn += 1
//         kop -= 100
//       }
//     }
//     if (/.бун/gi.test(el)) {
//       byn += +el.replace(/[^0-9]/g, '')
//     }
//   })
// }

// function spliterNegative(str) {
//   str.split(' ').forEach(el => {

//     if (/.коп/gi.test(el)) {
      
//       if (kop < +el.replace(/[^0-9]/g, '')) {
//         byn -= 1
//         kop += 100
//       }
//       kop -= +el.replace(/[^0-9]/g, '')
//     }
//     if (/.бун/gi.test(el)) {
//       byn -= +el.replace(/[^0-9]/g, '')
//     }
//   })
// }