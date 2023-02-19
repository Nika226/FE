// Замыкание — это комбинация функции и лексического окружения, в котором эта функция была определена.
// Замыкание – это функция, которая запоминает свои внешние переменные и может получить к ним доступ.

// const showNumber = (a) => {
//   return show = () => console.log(a)
// }

// const show_1 = showNumber(5);
// const show_2 = showNumber(13);

// show_1(); // 5
// show_2(); // 13


const getSum = num1 => {
  return sum = num2 => num1 + num2
}

const sumTen = getSum(10);
const sumHundred = getSum(100);
const sumTwenty = getSum(20);

console.log(sumTen(25)); // 35
console.log(sumHundred(25)); // 125
console.log(sumTwenty(25)); // 45

