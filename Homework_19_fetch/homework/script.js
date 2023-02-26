// ДЗ
// 1. Отправить fetch-запрос по ссылке https://jsonplaceholder.typicode.com/todos
// 2. Из полученного ответа сформировать карточки с задачами. Карточка содержит два параграфа - title (название задачи) и status ('done', если completed: true, или 'not done', если completed: false)
// 3. Стилизовать карточки (border, padding, width, border-radius)
// 4. Если задача выполнена, покрасить карточку в светло-зеленый цвет. Если не выполнена - в светло-серый.

const cards_container = document.querySelector('.cards_container');

const cards_render = data => {
  data.forEach(({ title, completed }) => {
    const cardElem = document.createElement('div');
    const titleElem = document.createElement('p');
    const statusElem = document.createElement('p');

    const status = completed ? 'done' : 'not done';
    const back_color = completed ? 'lightgreen' : 'lightgray';

    titleElem.innerText = `Title: ${title}`;
    statusElem.innerText = `Status: ${ status }`;

    cardElem.classList.add('card');
    cardElem.style.backgroundColor = back_color;

    cardElem.append(titleElem, statusElem);
    cards_container.append(cardElem);
  })
}

fetch('https://jsonplaceholder.typicode.com/todos') // отправляем запрос
  .then(res => res.json())
  .then(json => cards_render(json))

