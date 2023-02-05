//Задан массив объектов workers. Выведите на экран карточки со следующей информацией по всем работникам: ID, Имя, Фамилия, Возраст, Зарплата. Зарплата рассчитывается через умножение ставки на количество дней. Примените стили к карточкам: width, padding, border, background-color.
// Вывести каждому пользователю его фотографию
// Вывести каждому пользователю email - сделать его кликабельным. При клике должно открываться приложение по умолчанию, которое работает с почтой

const workers = [
  {
    id: 1,
    first_name: "Olga",
    last_name: "Petrova",
    age: 18,
    rate: 100,
    days: 15,
    photo: "https://reqres.in/img/faces/12-image.jpg",
    progress: 50,
    email: 'example1@gmail.com',
    username: 'olga_petrova'
  },

  {
    id: 2,
    first_name: "Petr",
    last_name: "Ivanov",
    age: 46,
    rate: 70,
    days: 22,
    photo: "https://reqres.in/img/faces/4-image.jpg",
    progress: 10,
    email: 'example2@gmail.com',
    username: 'petr123'
  },

  {
    id: 3,
    first_name: "Oleg",
    last_name: "Orlov",
    age: 32,
    rate: 34,
    days: 10,
    photo: "https://reqres.in/img/faces/10-image.jpg",
    progress: 75,
    email: 'example3@gmail.com',
    username: 'olegOleg'
  },

  {
    id: 4,
    first_name: "Irina",
    last_name: "Medvedeva",
    age: 22,
    rate: 85,
    days: 17,
    photo: "https://reqres.in/img/faces/2-image.jpg",
    progress: 30,
    email: 'example4@gmail.com',
    username: 'irina_medvedeva'
  },
];


const rootElem = document.querySelector('.root');

workers.forEach(({ first_name, last_name, age, rate, days, photo, email, progress, username }) => {
  const cardElem = document.createElement('div');
  const firstnameElem = document.createElement('p');
  const lastnameElem = document.createElement('p');
  const ageElem = document.createElement('p');
  const salaryElem = document.createElement('p');
  const photoElem = document.createElement('img');
  const emailElem = document.createElement('a');
  const progressContainer = document.createElement('div');
  const progressLine = document.createElement('div');
  const progressValue = document.createElement('p');
  const usernameElem = document.createElement('p');

  firstnameElem.innerText = `Firstname: ${first_name}`;
  lastnameElem.innerText = `Lastname: ${last_name}`;
  ageElem.innerText = `Age: ${age}`;
  salaryElem.innerText = `Salary: ${rate * days}`;
  emailElem.innerText = email;
  progressValue.innerText = progress + '%';
  usernameElem.innerText = `Username: ${username}`;

  cardElem.classList.add('user_card');
  progressContainer.classList.add('progress_container');
  progressLine.classList.add('progress_line');
  progressValue.classList.add('progress_value');

  progressLine.style.width = `${progress}%`;

  photoElem.setAttribute('src', photo);
  photoElem.setAttribute('alt', `${first_name} ${last_name}`);

  emailElem.setAttribute('href', `mailto:${email}`);

  progressContainer.append(progressLine, progressValue);
  cardElem.append(photoElem, firstnameElem, lastnameElem, usernameElem, ageElem, salaryElem, emailElem, progressContainer);
  rootElem.append(cardElem);
});

// const users_cards = workers.map(({ first_name, last_name, age, rate, days }) => {
//   const cardElem = document.createElement('div');
//   const firstnameElem = document.createElement('p');
//   const lastnameElem = document.createElement('p');
//   const ageElem = document.createElement('p');
//   const salaryElem = document.createElement('p');

//   firstnameElem.innerText = `Firstname: ${first_name}`;
//   lastnameElem.innerText = `Lastname: ${last_name}`;
//   ageElem.innerText = `Age: ${age}`;
//   salaryElem.innerText = `Salary: ${rate * days}`

//   cardElem.append(firstnameElem, lastnameElem, ageElem, salaryElem);
//   return cardElem
// });

// rootElem.append(...users_cards);

// console.log(users_cards);
// console.log(...users_cards);


