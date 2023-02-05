
// 3. Дан массив с объектами. Для каждого объекта в массиве создать карточку с тремя параграфами (имя, фамилия, возраст)

// 4. Стилизовать карточки, используя следующие свойства: border, padding, border-radius, width;

// 5. Если пользователь совершеннолетний, то покрасить карточку в зеленый, если нет - то в розовый

// 6. Вывести на экран только тех, кто младше 30 лет (включительно)

// 7. Если имя пользователя начинается на букву A, то задать этой карточке размер шрифта 20px (font-size)

const users = [
  {
    id: 1,
    firstname: 'Irina',
    lastname: 'Petrova',
    age: 38
  },
  {
    id: 2,
    firstname: 'Anton',
    lastname: 'Ushanov',
    age: 12
  },
  {
    id: 3,
    firstname: 'Maxim',
    lastname: 'Galkin',
    age: 50
  },
  {
    id: 4,
    firstname: 'Nelli',
    lastname: 'Efremyan',
    age: 27
  },
  {
    id: 5,
    firstname: 'Alla',
    lastname: 'Pugacheva',
    age: 70
  }
];


const rootElem = document.querySelector('.root');

users
.filter(el => el.age <= 30)
.forEach(({ firstname, lastname, age }) => {
  const cardElem = document.createElement('div');
  const firstnameElem = document.createElement('p');
  const lastnameElem = document.createElement('p');
  const ageElem = document.createElement('p');

  // const { firstname, lastname, age } = el;

  firstnameElem.innerText = `Firstname: ${firstname}`;
  lastnameElem.innerText = `Lastname: ${lastname}`;
  ageElem.innerText = `Age: ${age}`;

  cardElem.classList.add('card_elem');

  cardElem.style.backgroundColor = age >= 18 ? 'lightgreen' : 'lightpink';

  if(firstname[0].toUpperCase() === 'A') {
    cardElem.style.fontSize = '20px';
  }

  cardElem.append(firstnameElem, lastnameElem, ageElem);
  rootElem.append(cardElem);
});
