// 1. Напишите функцию, которая принимает два аргумента (основание степени и саму степень) и возвращает число в указанной степени. Значение степени должно быть указано по умолчанию 2. 

const powNums = (num1, num2 = 2) => num1 ** num2;
const powNums2 = (num1, num2 = 2) => Math.pow(num1, num2);

// console.log(powNums(3, 3)); // 27
// console.log(powNums(3)); // 9


// 2. Напишите функцию, принимающую в качестве аргументов пять чисел и выводящую в консоль наибольшее из них.

const maxNum = (num1, num2, num3, num4, num5) => Math.max(num1, num2, num3, num4, num5);

// console.log(maxNum(4, 1, 8, 10, 3)); // 10

// 3. Реализуйте функцию, которая принимает в качестве аргумента число и возвращает его абсолютное значение. Выведите результат в консоль.

const absNum = num => Math.abs(num);

// console.log(absNum(-9)); // 9

// 4. Напишите функцию, которая принимает три аргумента: имя, фамилию и возраст. Если возраст больше или равен 18, то функция возвращает строку в формате: 'Здравствуйте, <Имя> <Фамилия>'. Если возраст меньше 18, то функция возвращает строку в формате: 'Привет, <Имя> <Фамилия>'. Выведите результат в консоль.

const greeting = (firstname, lastname, age) => age >= 18 ? `Здравствуйте, ${firstname} ${lastname}` : `Привет, ${firstname} ${lastname}`;

// console.log(greeting('Olga', 'Petrova', 23));
// console.log(greeting('Anton', 'Ivanov', 13));

// 5. * Напишите функцию, которая принимает в качестве аргумента строку, а возвращает ее длину. Выведите результат в консоль.

const getStringLength = str => str.length;

// console.log(getStringLength('hello')); // 5
// console.log(getStringLength('hello123')); // 8

// 6. * Напишите функцию, которая принимает в качестве аргумента строку и возвращает ее же, но со всеми буквами в верхнем регистре. Выведите результат в консоль.

const getUpperString = str => str.toUpperCase();
const getLowerString = str => str.toLowerCase();

// console.log(getUpperString('hElLO')); // HELLO
// console.log(getLowerString('hElLO')); // hello

// 7. * Напишите функцию, которая примает две строки и возвращает наиболее длинную из них. Выведите результат в консоль.

const getLongestString = (str1, str2) => str1.length > str2.length ? str1 : str2;

console.log(getLongestString('hello12345', 'hello123'));