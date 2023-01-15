// Создать кнопку, при клике на которую в консоль выводится сообщение 'Hello, world!'

const show_btn = document.querySelector('.show_btn');

show_btn.addEventListener('click', () => console.log('Hello, world'));

// Создать кнопку и пустой div. При клике на кнопку в div создается два параграфа (текст произвольный). Один параграф синего цвета и размером шрифта 20px. Второй - красного цвета, шрифт 24px

const create_btn = document.querySelector('.create_btn');
const result = document.querySelector('.result');

create_btn.addEventListener('click', () => {
  const par_1 = document.createElement('p');
  const par_2 = document.createElement('p');

  par_1.innerText = 'Paragraph 1';
  par_2.innerText = 'Paragraph 2';

  par_1.style.color = 'blue';
  par_1.style.fontSize = '20px';
  par_2.style.color = 'red';
  par_2.style.fontSize = '24px';

  result.append(par_1, par_2);
})

// Написать функцию, которая принимает два числовых агрумента, а возвращает произведение (умножение) этих чисел. Вывести результат в консоль

const multNums = (num1, num2) => num1 * num2;

// console.log(multNums(2, 3)); // 6
// console.log(multNums(3, 4)); // 12

// Написать функцию, которая принимает числовой аргумент, а возвращает это число в 3 степени. Выведите результат в консоль

const powNums = num => num ** 3;

// console.log(powNums(3)); // 27
// console.log(powNums(2)); // 8

const cube3 = (num1, num2 = 3) => num1 ** num2;

// console.log(cube3(3)); // 27
// console.log(cube3(3, 2)); // 9