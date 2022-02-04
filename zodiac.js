solution = function (dateStr) {

 const arrZod = [
    {name:'Козерог', month:1, dat:20},
    {name:'Водолей', month:2, dat:19},
    {name:'Рыбы',    month:3, dat:20},
    {name:'Овен',    month:4, dat:20},
    {name:'Телец',   month:5, dat:20},
    {name:'Близнецы',month:6, dat:21},
    {name:'Рак',     month:7, dat:22},
    {name:'Лев',     month:8, dat:21},
    {name:'Дева',    month:9, dat:23},
    {name:'Весы',    month:10,dat:23},
    {name:'Скорпион',month:11,dat:22},
    {name:'Стрелец', month:12,dat:22},
    {name:'Козерог', month:1, dat:23},
    ];


  let dat = dateStr.split('/')[0]
  let month = +dateStr.split('/')[1]
  if (dat <= arrZod[month-1].dat ) {
    // Если начало месяца - раньше или равно связанной дате(dat)
    return arrZod[month-1].name
    } else {
      return (arrZod[month % 12].name);
    }
    
};

console.log(solution('21/03'));