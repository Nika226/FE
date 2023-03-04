const users_container = document.querySelector('.users_container');
const [ left_btn, right_btn ] = document.querySelectorAll('.triggers button');
let idNum = 1;

const render = ({ name, username, email, address }) => {
  users_container.innerText = '';
  const cardElem = document.createElement('div');
  const nameElem = document.createElement('p');
  const usernameElem = document.createElement('p');
  const emailElem = document.createElement('a');
  const addressElem = document.createElement('p');

  const { street, city, suite, zipcode } = address;

  nameElem.innerText = `Name: ${name}`;
  usernameElem.innerText = `Username: ${username}`;
  emailElem.innerText = email;
  addressElem.innerText = `Address: ${suite}, ${street}, ${zipcode} ${city}`;

  emailElem.href = `mailto:${email}`;

  cardElem.append(nameElem, usernameElem, emailElem, addressElem);
  users_container.append(cardElem);
}

const getUser = id => {
  fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(res => res.json())
    .then(json => render(json))
}

getUser(idNum);

left_btn.addEventListener('click', () => {
  if (idNum === 1){
    idNum = 11
  }
  getUser(--idNum)
});

right_btn.addEventListener('click', () => {
  if (idNum === 10){
    idNum = 0
  }
  getUser(++idNum)
});
