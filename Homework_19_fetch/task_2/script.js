const cards_container = document.querySelector('.cards_container');

const render = json => {
  json.forEach(({ first_name, avatar }) => {
    const cardElem = document.createElement('div');
    const nameElem = document.createElement('p');
    const avatarElem = document.createElement('img');

    nameElem.innerText = first_name;

    avatarElem.src = avatar;
    avatarElem.alt = first_name;

    cardElem.classList.add('card');

    cardElem.append(nameElem, avatarElem);
    cards_container.append(cardElem);
  })
}

const getUsers = id => {
  fetch(`https://reqres.in/api/users?page=${id}`)
    .then(res => res.json())
    .then(json => render(json.data))
}

getUsers(1);
