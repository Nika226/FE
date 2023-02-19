// 1. Вывести введенное в инпут значение в консоль
const show_value_form = document.querySelector('.show_value_form');
show_value_form.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log(event.target.text.value);
  event.target.text.value = '';
});

// 2. При клике на кнопку менять цвет фона на черный
const change_backgroung_black = document.querySelector('.change_backgroung_black');
change_backgroung_black.addEventListener('click', () => {
  document.body.style.backgroundColor = 'black'
});

// 3. Дан массив с цветами. При клике на кнопку менять цвет заднего фона на цвета из массива по порядку
const colors = ['pink', 'green', 'blue'];
const change_background = document.querySelector('.change_background');
let colorIndex = 0;

change_background.addEventListener('click', () => {
  document.body.style.backgroundColor = colors[colorIndex++ % colors.length]
});

// colorIndex++ % colors.length

// 0 % 3 = 0
// 1 % 3 = 1
// 2 % 3 = 2
// 3 % 3 = 0
// 4 % 3 = 1
// 5 % 3 = 2
// 6 % 3 = 0


// 4. Дан массив с картинками. Первая картинка - no image available, далее - картинки из массива по порядку

const photos = [
  'https://reqres.in/img/faces/1-image.jpg',
  'https://reqres.in/img/faces/2-image.jpg',
  'https://reqres.in/img/faces/3-image.jpg',
  'https://reqres.in/img/faces/4-image.jpg',
  'https://reqres.in/img/faces/5-image.jpg'
]

let photoIndex = 0;

const slider_img = document.querySelector('.slider_img');
slider_img.addEventListener('click', (event) => {
  event.target.src = photos[photoIndex++ % photos.length]
});

// 5. Дан массив с картинками. Первая картинка - первая картинка массива. При клике на кнопки, переключать на следующую/предыдущую картинку

const slider_buttons = document.querySelector('.slider_buttons');
const left_btn = document.querySelector('.left_btn');
const right_btn = document.querySelector('.right_btn');

let photoIndex2 = 1;

right_btn.addEventListener('click', () => {
  slider_buttons.src = photos[photoIndex2++ % photos.length]
});

left_btn.addEventListener('click', () => {
  if (photoIndex2 === 0){
    photoIndex2 = photos.length
  }
  slider_buttons.src = photos[photoIndex2-- % photos.length]
});


// 6. Есть кнопка с размерами 30х30 пикселей (размеры задать через js). При клике на кнопку увеличивать высоту и ширину на 10 пикселей
const incr_btn = document.querySelector('.incr_btn');
let btn_params = 30;
incr_btn.style.width = btn_params + 'px';
incr_btn.style.height = btn_params + 'px';

incr_btn.addEventListener('click', event => {
  btn_params += 10;
  event.target.style.width = btn_params + 'px';
  event.target.style.height = btn_params + 'px';
});

// 7. При клике на кнопку менять содержимое инпута на !!!
const change_value_btn = document.querySelector('.change_value_btn');
const change_value_input = document.querySelector('.change_value_input');

change_value_btn.addEventListener('click', () => change_value_input.value = '!!!');


// ДЗ
// 1. При клике на кнопку менять ее цвет на рандомный
// 2. При клике на кнопку меня цвет заднего фона на рандомный
// 3. Создать генератор бросаемых костей (вычисляются два случайных числа от 1 до 6)
