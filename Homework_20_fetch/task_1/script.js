const user_info = document.querySelector('.user_info');
let idNum = 1;

const render = json => {
  user_info.innerText = '';

  const cardElem = document.createElement('div');
  const user = document.createElement('p');

  user.innerText = `${json.name} ${json.phone}`;

  cardElem.append(user);
  user_info.append(cardElem);
}

const getUser = id => {
  fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(res => res.json())
    .then(json => render(json))
}

getUser(idNum);

// let arrLength;

// const getUsersArr = () => {
//   fetch(`https://jsonplaceholder.typicode.com/users`)
//     .then(res => res.json())
//     .then(json => arrLength = getUsersArrLength(json))
// }

// const getUsersArrLength = arr => arr.length;
// getUsersArr()

// console.log(arrLength);


const [ left_btn, right_btn ] = document.querySelectorAll('.triggers button');

left_btn.addEventListener('click', () => {
  if (idNum === 1) {
    idNum = 11
  }
  getUser(--idNum)
});

right_btn.addEventListener('click', () => {
  if(idNum === 10){
    idNum = 0
  }
  getUser(++idNum)
});
