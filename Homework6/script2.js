// Дан массив чисел
const numbers = [45, 73, -200, 0, 544, 23, 74, 3, 2, -11, -43];

// 1. Сформируйте массив из отрицательных чисел

const negative_nums = [];
for(let i = 0; i < numbers.length; i++){
  if(numbers[i] < 0){
    negative_nums.push(numbers[i])
  }
}

// 2. Сформируйте массив из положительных чисел, заканчивающихся на 3

const positive_nums_3 = [];
for(let i = 0; i < numbers.length; i++){
  if(numbers[i] > 0 && numbers[i] % 10 === 3){
    positive_nums_3.push(numbers[i])
  }
}

// 3. Сформируйте массив положительных четных чисел

const positive_nums_even = [];
for(let i = 0; i < numbers.length; i++){
  if(numbers[i] > 0 && numbers[i] % 2 === 0){
    positive_nums_even.push(numbers[i])
  }
}

// 4. Сформируйте массив из всех чисел, умноженных на 3

const nums_mult = [];
for(let i = 0; i < numbers.length; i++){
  nums_mult.push(numbers[i] * 3)
}

// 5. Вывести в консоль последний элемент массива

 console.log(numbers[numbers.length - 1]);

// 6. Сформируйте массив из последних цифр каждого элемента массива

const last_nums = [];
for(let i = 0; i < numbers.length; i++){
  last_nums.push(Math.abs(numbers[i] % 10))
}


// Дан массив строк
const products = ['bread', 'milk', 'butter', 'water', 'juice', 'apple', 'tomato', 'Beer'];


// 7. Сформировать массив из продуктов, длина которых равна 5

const long_products = [];
for(let i = 0; i < products.length; i++){
  if(products[i].length === 5){
    long_products.push(products[i])
  }
}

// 8. Сформировать массив из строк, которые начинаются на букву 'b'. Регистр может быть любым. Строка должна быть приведена к верхнему регистру

const b_products = [];
for(let i = 0; i < products.length; i++){
  if (products[i][0].toLowerCase() === 'b'){
    b_products.push(products[i].toUpperCase())
  }
}

// 9. Сформировать массив из строк, которые заканчиваются на букву 'r'

const r_products = [];
for(let i = 0; i < products.length; i++){
  if(products[i][products[i].length - 1] === 'r'){
    r_products.push(products[i])
  }
}


// Дан массив с разными типами данных
const array = ['hello', 9, true, false, 5, 67, undefined, null, 0];

// 10. Сформировать массив из чисел

const nums = [];
for(let i = 0; i < array.length; i++){
  if(typeof array[i] === 'number'){
    nums.push(array[i])
  }
}

// 11. Сформировать новый массив, в котором все булевые значения будут заменены на строку 'boolean', а числовые значения - на строку 'number'

const new_array = [];
for(let i = 0; i < array.length; i++){
  if(typeof array[i] === 'boolean'){
    new_array.push('boolean')
  } else if (typeof array[i] === 'number'){
    new_array.push('number')
  } else {
    new_array.push(array[i])
  }
}