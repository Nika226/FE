const cards_container = document.querySelector('.cards_container');

const render = json => {
  json.forEach(({ first_name, avatar, email }) => {
    const cardElem = document.createElement('div');
    const nameElem = document.createElement('p');
    const avatarElem = document.createElement('img');
    const emailElem = document.createElement('a');

    nameElem.innerText = first_name;
    emailElem.innerText = email;

    // avatarElem.setAttribute('src', avatar);
    // avatarElem.setAttribute('alt', first_name);

    avatarElem.src = avatar;
    avatarElem.alt = first_name;
    emailElem.href = `mailto:${email}`;

    cardElem.classList.add('card');

    cardElem.append(nameElem, emailElem, avatarElem);
    cards_container.append(cardElem);
  })
}

fetch('https://reqres.in/api/users')
  .then(res => res.json())
  .then(json => render(json.data))
