const cards_container = document.querySelector('.cards_container');

// 1. Отправить fetch-запрос по адресу https://jsonplaceholder.typicode.com/users и вывести в консоль полученный ответ

fetch('https://jsonplaceholder.typicode.com/users') // отправляем запрос на сервер
  .then(res => res.json()) // получает ответ, преобразовываем его в json
  .then(json => cards_render(json)) // что-то делаем с полученным json (например, выводим в консоль)


// 2. Из полученных данных сформировать карточки пользователей (id, name, email)
// 3. Добавить в карточку информацию о городе пользователя в формате 'zipcode, city'

const cards_render = json => {
  json.forEach(({ id, name, email, address }) => {
    const cardElem = document.createElement('div');
    const idElem = document.createElement('p');
    const nameElem = document.createElement('p');
    const emailElem = document.createElement('p');
    const addressElem = document.createElement('p');

    idElem.innerText = `ID: ${ id }`;
    nameElem.innerText = `Full name: ${ name }`;
    emailElem.innerText = `Email: ${ email }`;
    addressElem.innerText = `Address: ${address.zipcode}, ${address.city}`;

    cardElem.classList.add('user_card');

    cardElem.append(idElem, nameElem, emailElem, addressElem);
    cards_container.append(cardElem);
  })
}


