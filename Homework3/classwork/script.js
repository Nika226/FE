// 1. Создайте функцию, которая принимает два аргумента - имя и возраст. Функция возвращает строку с приветствием в формате: 'Hello <ИМЯ>! You are <ВОЗРАСТ> years old.'. Выведите результат в консоль

const show_greeting = (name, age) => `Hello ${name}! You are ${age} years old.`

// console.log(show_greeting('Olga', 22));
// console.log(show_greeting('Anton', 18));
// console.log(show_greeting('Petr', 48));



let firstname = 'Nelli';
let age = '27';

// console.log(firstname);
// console.log(typeof firstname);
// console.log(age);
// console.log(typeof age);

let message = 'Hello ' + firstname + '. Your age is ' + age + '.'; // конкатенация (склеивание)

let message_2 = `Hello ${firstname}.\nYour age is ${age}.`; // интерполяция

// console.log(message);
// console.log(message_2);

// console.log(1 + 1); // 2
// console.log('1' + '1'); // 11
// console.log('1' + 1); // 11
// console.log('1' - 1); // 0
// console.log('1h' - 1); // NaN - not a number

'1' 
'1hello'

// 2. Создать функцию, которая принимает два числа и одну строку и возвращает строку в формате: 'Слово: <STRING>, сумма чисел: <NUM1 + NUM2>'

// const get_message = (str, num1, num2) => `Слово: ${str}, сумма чисел: ${num1 + num2}`;
const get_message = (str, num1, num2) => `Слово: ${str}, сумма чисел: ${num1} + ${num2} = ${num1 + num2}`;

// console.log(get_message('table', 3, 4));
// console.log(get_message('chair', 5, 10));


// 3. Создать функцию, которая принимает два аргумента - имя и возраст. Если возраст больше или равен 18, то возращается строка 'Hello, <ИМЯ>'. Если возраст меньше 18, то возращается строка 'Hi, <ИМЯ>'

const get_message_2 = (name, age) => {
  if(age >= 18) {
    return `Hello, ${name}`
  } else {
    return `Hi, ${name}`
  }
}

const get_message_3 = (name, age) => age >= 18 ? `Hello, ${name}` : `Hi, ${name}`;

// Условие ? Выражение 2 : Выражение 3

// В1 - условие
// В2 - что произойдет, если условие верно
// В3 - что произойдет, если условие неверно

// console.log(get_message_3('Inna', 22)); // Hello, Inna
// console.log(get_message_3('Oleg', 15)); // Hi, Oleg


// 4. Напишите функцию, которая принимает два аргумента с числовым значением и возвращает большее значение.
// Если числа равны, вернуть строку 'The numbers are equal'. Выведите результат в консоль.

// const getMaxNum = (num1, num2) => num1 > num2 ? num1 : num2;
const getMaxNum = (num1, num2) => num1 > num2 ? num1 : num2 > num1 ? num2 : 'The numbers are equal';

// console.log(getMaxNum(6.4, 6)); // 6
// console.log(getMaxNum(51, 6)); // 51
// console.log(getMaxNum(11, 11)); // 'The numbers are equal'



//==================================


// Объект Math

let a = Math.max(1, 2, 4, 56, 0, 504); // 504
let b = Math.min(1, 2, 4, 56, 0, 504); // 0

let c = Math.abs(4); // 4
let d = Math.abs(-4); // 4

let e = Math.ceil(6.23); // 7
let f = Math.floor(6.23); // 6
let g = Math.round(6.23); // 6

let h = Math.pow(2, 3); // 2**3 = 8
let i = Math.sqrt(16); // 4

let j = Math.random();

// console.log(j);
// console.log(i);
// console.log(g);


// 5. Сгенерировать случайное целое число от 0 до 10

let random_num = Math.round(Math.random() * 10);

let random_1 = Math.random(); // случайное дробное число от 0 до 1
let random_2 = random_1 * 10; // случайное дробное число от 0 до 10
let random_3 = Math.round(random_2); // округляем случайное дробное число от 0 до 10

console.log(random_num);
