const nums = [-1, 0, 98, 3, 111, 18, 48, -22, -16];

// 1. Сформировать новый массив из положительных четных чисел

const positiv_nums_even = nums.filter(el => el > 0 && el % 2 === 0);
console.log(positiv_nums_even);


// 2. Сформировать новый массив из последних цифр положительных чисел 
// => [8, 3, 1, 8, 8]



const pos_last_nums = nums.filter(el => el > 0).map(el => el % 10);
// const result = pos_last_nums.map(el => el % 10);

// console.log(pos_last_nums);

// Оператор typeof

const firstname = 'Nelli';
const age = 27;

console.log(typeof firstname); // 'string'
console.log(typeof age); // 'number'
console.log(typeof true); // 'boolean'

// Дан массив с разными типами данных

const arr = [1, 'hello', true, 6, 8, 'good night', 33];


// 1. Сформируйте новый массив из чисел из массива arr => [1, 6, 8, 33];

const numbers = arr.filter(el => typeof el === 'number');

// console.log(numbers);


// 2. Сформировать новый массив, в котором булевые значения будут заменены на строку 'boolean';
// => [1, 'hello', 'boolean', 6, 8, 'good night', 33]

const boolean_arr = arr.map(el => typeof el === 'boolean' ? 'boolean' : el);

// console.log(boolean_arr);

// 3. Сформировать новый массив, в котором все числовые значения будут увеличены в два раза.
// => [2, 'hello', true, 12, 16, 'good night', 66]


const nums_arr = arr.map(el => typeof el === 'number' ? el * 2 : el);

console.log(nums_arr);

// ДЗ:

const numbers1 = [44, 3, -10, 1, 98, 22, 2, -15, -32];

// 1. Дан массив numbers. Сформировать новый массив с положительными числами умноженными на 3
// 2. Дан массив numbers. Сформировать новый массив, где все элементы больше 10 поделить на 2
// 3. Дан массив numbers. Сформировать новый массив, где все элементы заканчивающиеся на 2 заменены на false

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