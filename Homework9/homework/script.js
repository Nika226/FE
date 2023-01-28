// 1. Дан массив numbers. Сформировать новый массив с положительными числами умноженными на 3

 const numbers = [44, 3, -10, 1, 98, 22, 2, -15, -32];



 const positiv_numbers = numbers.filter(el => el > 0 && el % 2 === 0).map(el => el * 3);

 console.log(positiv_numbers);



// 2. Дан массив numbers. Сформировать новый массив, где все элементы больше 10 поделить на 2



 const new_numbers = numbers.filter(el => el > 10).map(el => el / 2);

 console.log(new_numbers);



// 3. Дан массив numbers. Сформировать новый массив, где все элементы заканчивающиеся на 2 заменены на false


const false_numbers = numbers.map(el => Math.abs(el % 10) === 2 ? false : el);

 console.log(false_numbers);

   
                       
//  console.log(numbers_arr);

// 4. Дан массив из массивов. Вложенные массивы хранят в себе данные о пользователе (имя, фамилия и активность). 


//Напишите filter, который оставляет только активных пользователей (true). 
//Добавьте map, который в отфильтрованном списке преобразует вложенные массивы в строки. 

 let array = [
     ['Максим', 'Грибов', true], 
     ['Антон', 'Куликов', true], 
     ['Светлана', 'Иванова', false], 
     ['Ольга', 'Петрова', true], 
     ['Сидр', 'Сидоров', false]
    ]

    let new_1 = array.filter(el => typeof el === 'string' ? 'true' : el).map(el => el === 'array' ? 'string': el);

    console.log(new_1);
    