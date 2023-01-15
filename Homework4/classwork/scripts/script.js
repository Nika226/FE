
// 1. Функция принимает две строки и возвращает длину самой короткой строки. Выведите длину самой короткой строки в консоль.

const getShortestLength = (str1, str2) => str1.length > str2.length ? str2.length : str1.length;

const getShortestLength2 = (str1, str2) => Math.min(str1.length, str2.length);

// console.log(getShortestLength2('hello', 'hello123')); // 5


// 2. Функция принимает 2 строки и возвращает самую длинную из них в верхнем регистре
// - найти самую длинную строку
// - возвести все символы строки в верхний регистр
// - вернуть строку

const getLongestString = (str1, str2) => str1.length > str2.length ? str1.toUpperCase() : str2.toUpperCase();

// console.log(getLongestString('hello', 'hello12345')); // HELLO12345

// 3. Функция принимает 3 строки и возвращает самую длинную из них в верхнем регистре

const getLongestString2 = (str1, str2, str3) => {
  if(str1.length > str2.length && str1.length > str3.length) {
    return str1.toUpperCase()
  } else if (str2.length > str1.length && str2.length > str3.length) {
    return str2.toUpperCase()
  } else {
    return str3.toUpperCase()
  }
}

const getLongestString3 = (string1, string2, string3) => { 
  const string = string1.length > string2.length && string1.length > string3.length ? string1 : string2.length > string1.length && string2.length > string3.length ? string2 : string3;
  return string.toUpperCase()
};

// console.log(getLongestString3('hello', 'hello12345', 'hello12345678')); // HELLO12345678


// ЦИКЛЫ

// 1. Вывести в консоль сообщение 'hello' 10 раз

// for(let i = 1; i <= 10; i++) {
//   console.log('hello')
// }

// начало цикла; конец цикла; с каким шагом идем


// 2. Вывести в консоль числа от 0 до 10

// for(let i = 0; i <= 10; i++) {
//   console.log(i)
// }

// 3. Вывести в консоль числа от 45 до 55

// for(let i = 45; i <= 55; i++){
//   console.log(i)
// }

// 4. Вывести в консоль числа от 55 до 45

// for (let i = 55; i >= 45; i--){
//   console.log(i)
// }

// 5. Вывести каждое третье число в диапазоне от 100 до 46 (100, 97, 94....)

// for (let i = 100; i >= 46; i -= 3){
//   console.log(i)
// }


// console.log(9 % 3); // 0
// console.log(9 % 4); // 1
// console.log(9 % 10); // 9


// 6. Вывести четные числа от 2 до 16 (2, 4, 6...)

// for (let i = 2; i <= 16; i++){
//   if (i % 2 === 0){
//     console.log(i)
//   }
// }

// 7. Вывести нечетные числа от 2 до 16 (2, 4, 6...)

// for (let i = 2; i <= 16; i++){
//   if (i % 2 === 1){
//     console.log(i)
//   }
// }
