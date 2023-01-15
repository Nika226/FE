// 1. Дан массив чисел. Вывести в консоль все числа больше 50

const numbers = [43, 1, -9, 132, 635, 52, 83];

// for (let i = 0; i < numbers.length; i++){
//   if (numbers[i] > 50){
//     console.log(numbers[i])
//   }
// }

// 2. Вывести в консоль все отрицательные числа деленные на 2

// for (let i = 0; i < numbers.length; i++){
//   if(numbers[i] < 0){
//     console.log(numbers[i] / 2)
//   }
// }

// 3. Вывести в консоль последний элемент массива

// console.log(numbers[numbers.length - 1]);



// МЕТОДЫ МАССИВОВ

const nums = [1, 2, 3, 4, 5];

nums.push(6); // добавляет элемент в конец массива
nums.pop(); // удаляет элемента из конца массива
nums.unshift(0); // добавляет элемент в начало массива
nums.shift(); // удаляет эдемент из начала массива


const num = [40, -5, 7, 87, 153, -101, 77];

// 1. Сформировать новый массив, в который попадут все отрицательные числа из массива num => [-5, -101]

const num_2 = [];

for(let i = 0; i < num.length; i++){
  if(num[i] < 0){
    num_2.push(num[i])
  }
}

// console.log(num_2); // [-5, -101]

// 2. Сформировать новый массив, в который попадут все четные числа из массива num

const num_3 = [];
for(let i = 0; i < num.length; i++){
  if (num[i] % 2 === 0){
    num_3.push(num[i])
  }
}

// 3. Сформируйте новый массив из последних цифр элементов массива => [0, 5, 7, 7, 3, 1, 7]

const num_4 = [];
for(let i = 0; i < num.length; i++){
  num_4.push(Math.abs(num[i] % 10))
}

for(let i = 0; i < num.length; i++) {
  if (num[i] < 0){
    num_4.push((num[i] % 10) * -1)
  } else {
    num_4.push(num[i] % 10)
  }
}

// 4. Сформировать массив, в котором числа больше 70 будут заменены на строку '>70', а числа меньше 70 будут заменены на строку '<70'

const num_5 = [];
// for(let i = 0; i < num.length; i++){
//   if(num[i] > 70){
//     num_5.push('>70')
//   } else {
//     num_5.push('<70')
//   }
// }

for(let i = 0; i < num.length; i++) {
  num[i] > 70 ? num_5.push('>70') : num_5.push('<70')
}

// 5. Сформировать новый массив с элементами, чья длина больше или равна 5

const fruits = ['apple', 'banana', 'pineapple', 'orange', 'kiwi', 'lemon', 'Lime', 'Avocado'];

const long_fruits = [];
for (let i = 0; i < fruits.length; i ++){
  if(fruits[i].length >= 5){
    long_fruits.push(fruits[i])
  }
}


// 6. Сформировать массив из строк, которые начинаются на букву 'l'

// console.log(fruits);
// console.log(fruits[0]);
// console.log(fruits[0][0]);

const fruits_l = [];
for(let i = 0; i < fruits.length; i++){
  if(fruits[i][0] === 'l'){
    fruits_l.push(fruits[i])
  }
}



// 7. Сформировать массив из строк, которые начинаются на букву 'l'. Регистр может быть любым

const fruits_l2 =[];
for(let i = 0; i < fruits.length; i++){
  if(fruits[i][0].toLowerCase() === 'l'){
    fruits_l2.push(fruits[i])
  }
}

// 8. Сформировать массив из строк, которые начинаются на букву 'a' (регистр может быть любым). Строка должна быть приведена к верхнему регистру => ['APPLE', 'AVOCADO']

const fruits_a = [];
for(let i = 0; i < fruits.length; i++){
  if(fruits[i][0].toUpperCase() === 'A'){
    fruits_a.push(fruits[i].toUpperCase())
  }
}

// 9. Дан массив nums_2. Извлечь квадратный корень из чисел массива nums_2 и сформровать из них новый массив

const nums_2 = [4, 9, 16, 25]; // [2, 3, 4, 5]

const new_nums_2 = [];
for(let i = 0; i < nums_2.length; i++){
  new_nums_2.push(Math.sqrt(nums_2[i]))
}