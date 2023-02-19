// Слушатели событий - event listener

const square = document.querySelector('.square');
const text = document.querySelector('.text');
const rootElem = document.querySelector('.root');

// 1. При клике на зеленый квардрат в консоль выводить сообщение 'green square clicked'
// square.addEventListener('click', () => console.log('green square clicked'));


// 2. При клике на зеленый квадрат его цвет меняется на красный

// square.addEventListener('click', (event) => event.target.style.backgroundColor = 'red');

// event.target - это ссылка на элемент, с которым происходит событие

// 3. При клике на зеленый квадрат у параграфа меняется цвет текста на красный

// square.addEventListener('click', () => text.style.color = 'red');


// 4. При клике на зеленый квадрат у параграфа меняется цвет текста на красный. При следующем клике - цвет меняется обратно на черный.

// text.style.color = 'black';
// square.addEventListener('click', () => text.style.color = text.style.color === 'black' ? 'red' : 'black');

// square.addEventListener('click', () => text.classList.toggle('red_text'));


// 5. При клике на зеленый квадрат создается параграф с произвольным текстом красного цвета

// square.addEventListener('click', () => {
//   const par = document.createElement('p');
//   par.innerText = 'Hello, world!';
//   par.style.color = 'red';
//   rootElem.append(par);
// });


// 6. При клике на зеленый квадрат создавать параграф с числом на единицу больше предыдущего.

// let counter_num = 0;

// const counter = document.createElement('p');
// counter.innerText = counter_num;

// rootElem.append(counter);

// square.addEventListener('click', () => {
//   const new_counter = document.createElement('p');
//   new_counter.innerText = counter_num++;
//   rootElem.append(new_counter);
// });

// counter++ - сначала возвращает число, потом увеличивает на 1
// ++counter - сначала увеличивает на 1, потом возвращает число


// 7. При клике на зеленый квадрат создать и добавить в rootElem новый квадрат с размерами 100х100px желтого цвета с черным border

// square.addEventListener('click', () => {
//   const new_square = document.createElement('div');
//   new_square.classList.add('new_yellow_square');
//   rootElem.append(new_square);
// });


// ДЗ:
// 1. При клике на зеленый квадрат выводит в консоль число на единицу больше предыдущего, начать с 0

// let counter_num = 0;

// square.addEventListener('click', () => {
//   console.log(counter_num);
//   counter_num++
// });

// 2. При клике на зеленый квадрат изменить его высоту и ширину на 400х400px и изменить цвет на синий

// square.addEventListener('click', (event) => {
//   event.target.style.width = '400px';
//   event.target.style.height = '400px';
//   event.target.style.backgroundColor = 'blue';
// });

// 3. *Создать в index.html кнопку. При клике на кнопку изменить цвет фона на розовый. При повторном клике вернуть на белый цвет

const click_btn = document.querySelector('.click_btn');

click_btn.addEventListener('click', () => {
  document.body.style.backgroundColor = document.body.style.backgroundColor === 'pink' ? 'white' : 'pink'
})

