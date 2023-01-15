// 1. Функция принимает числовое значение n. Найти сумму чисел от 1 до n. Вывести результат в консоль

const get_sum = n => {
  let sum = 0;
  for(let i = 1; i <= n; i++){
    sum += i
  }
  return sum
}

// console.log(get_sum(3)); // 6
// console.log(get_sum(4)); // 10
// console.log(get_sum(5)); // 15

// 2. Функция принимает числовое значение n. Найти произведение чисел от 1 до n. Вывести результат в консоль

const get_mult = n => {
  let mult = 1;
  for(let i = 1; i <= n; i++){
    mult *= i
  }
  return mult
}

// console.log(get_mult(3)); // 6
// console.log(get_mult(4)); // 24
// console.log(get_mult(5)); // 120



// МАССИВЫ

let people = ['Ivan', 'Olga', 'Anton', 'Irina'];

let numbers = [1, 2, 3, 4, 5, 6];

let array = [1, 'hello', true, [3, 5], { name: 'Nelli' }];

// console.log(people.length); // 4
// console.log(people[1]);

// 1. Найти индекс последнего элемента

// console.log(people.length - 1);


// 2. Вывести в консоль последний элемент массива numbers

// console.log(numbers[numbers.length - 1]);


// 3. Задана строка. Вывести в консоль последний элемент строки

const str = 'Hello! How are you doing?';

// console.log(str[str.length - 1]);


// 4. С помощью цикла вывести в консоль все элементы массива numbers

// for (let i = 0; i < numbers.length; i++){
//   console.log(numbers[i])
// }


const nums = [100, 33, 5, 2, 45, 73, 777, 63, 102];

// 5. Вывести в консоль все четные элементы массива nums

// for (let i = 0; i < nums.length; i++){
//   if (nums[i] % 2 === 0){
//     console.log(nums[i])
//   }
// }


// 6. Вывести в консоль все числа, заканчивающиеся на 3

// for (let i = 0; i < nums.length; i++){
//   if (nums[i] % 10 === 3){
//     console.log(nums[i])
//   }
// }


// 7. Вывести в консоль все числа больше 50

// for (let i = 0; i < nums.length; i++){
//   if (nums[i] > 50){
//     console.log(nums[i])
//   }
// }


// 8. Вывести в консоль последние цифры чисел

// for (let i = 0; i < nums.length; i++){
//   console.log(nums[i] % 10)
// }


// 9. Дан массив из строк. Вывести только слова, длиннее 10 символов

let arr = ['hello', 'bye', 'good morning', 'good evening', 'good night'];

for (let i = 0; i < arr.length; i++){
  if(arr[i].length > 10){
    console.log(arr[i])
  }
}