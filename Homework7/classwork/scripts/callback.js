// Callback - функция, переданная в другую функцию в качестве аргумента

const mult = () => 2 * 2; // 4
const mult1 = () => 2 * 3; // 6
const mult2 = () => 2 * 4; // 8

mult();
mult1();
mult2();

const mult3 = (a) => 2 * a;
mult3(2);
mult3(3);
mult3(4);

// Функция принимает в качестве аргумента массив. Берет каждый элемента массива и умножает его на 2

let numbers = [1, 2, 3, 4, 5];
let numbers2 = [10, 12, 3, 64, 55];

const mult_numbers = arr => {
  let result = [];
  for(let i = 0; i < arr.length; i++){
    result.push(arr[i] * 2)
  }
  return result
}

// console.log(mult_numbers(numbers));
// console.log(mult_numbers(numbers2));

// Функция принимает в качестве аргумента массив. Берет каждый элемента массива и делит его на 2

const divide_numbers = arr => {
  let result = [];
  for(let i = 0; i < arr.length; i++){
    result.push(arr[i] / 2)
  }
  return result
}

// Функция принимает в качестве аргумента массив. Берет каждый элемента массива и возводит его в квадрат

const pow_numbers = arr => {
  let result = [];
  for(let i = 0; i < arr.length; i++){
    result.push(arr[i] ** 2)
  }
  return result
}

// Написать универсальную функцию, которая будет принимать в качестве аргумента другую функцию

const universal = (arr, callback) => {
  let result = [];
  for(let i = 0; i < arr.length; i++){
    result.push(callback(arr[i]))
  }
  return result
}

const mult_on_2 = num => num * 2;
const divide_on_2 = num => num / 2;
const pow_on_2 = num => num ** 2;

console.log(universal(numbers, mult_on_2));
console.log(universal(numbers, divide_on_2));
console.log(universal(numbers, pow_on_2));