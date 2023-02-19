const click_btn = document.querySelector('.click_btn');
const square = document.querySelector('.square');
const root = document.querySelector('.root');

// 1. При клике на кнопку менять у квадрата цвет заднего фона квадрата на зеленый и уменьшать его до размеров 100х100px

// click_btn.addEventListener('click', () => {
//   square.style.width = '100px';
//   square.style.height = '100px';
//   square.style.backgroundColor = 'green';
// });


// 2. При клике на кнопку менять цвет на синий и выводить в консоль обновленный цвет квадрата

// click_btn.addEventListener('click', () => {
//   square.style.backgroundColor = 'blue';
//   console.log(square.style.backgroundColor);
// });


// 3. При клике на кнопку увеличивать высоту и ширину квадрата на 20px

// let square_params = square.clientHeight;

// click_btn.addEventListener('click', () => {
//   square_params += 20;
//   square.style.width = square_params + 'px'; // '170px'
//   square.style.height = square_params + 'px'; // '170px'
// });

// const params = '150px';
// const params_nums = +params.slice(0, params.length - 2);

// console.log(typeof params_nums);


// 4. При клике на кнопку в div с классом root создается параграф синего цвета

// click_btn.addEventListener('click', () => {
//   const par = document.createElement('p');
//   par.innerText = 'Hello';
//   par.style.color = 'blue';
//   root.append(par);
// });


// 4. При клике на кнопку в div с классом root создаются по очереди параграфы синего и зеленого цветов. Первый цвет синий.

let color = 'green';

click_btn.addEventListener('click', () => {
  const par = document.createElement('p');
  par.innerText = 'Hello';
  color = color === 'blue' ? 'green' : 'blue';
  par.style.color = color;
  root.append(par);
});
