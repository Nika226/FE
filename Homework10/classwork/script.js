// const user = {
//     id: 1,
//     first_name: 'Anton',
//     nicknames: ['user1', 'user2', 'user3'],
//     active: true,
//     address: {
//       country: 'Germany',
//       city: 'Berlin',
//       street: 'Achterstr.',
//       building: 2
//     }
//   }
  
   const getValue = (obj, key) => obj[key];

const product = {
    id: 1,
    title: 'Apple',
    price: 300
  }
  
  const student = {
    id: 5,
    first_name: 'Oleg',
    mark: 4.5
  }
  
  console.log(getValue(product, 'id')); // 1
  console.log(getValue(product, 'title')); // 'Apple'
  
  console.log(getValue(student, 'mark')); // 4.5
//   console.log(user);
//   console.log(user.address);
//   console.log(user['city']);
//   console.log(user.address.street);
  
const users = [
    {
      id: 1,
      first_name: 'Igor',
      last_name: 'Ushanov',
      age: 27,
      city: 'Berlin',
      country: 'Germany'
    }, 
    {
      id: 2,
      first_name: 'Irina',
      last_name: 'Petrova',
      age: 17,
      city: 'Madrid',
      country: 'Spain'
    }, 
    {
      id: 3,
      first_name: 'Olga',
      last_name: 'Ivanova',
      age: 63,
      city: 'Paris',
      country: 'France'
    },
    {
      id: 4,
      first_name: 'Petr',
      last_name: 'Shepelin',
      age: 41,
      city: 'Bremen',
      country: 'Germany'
    },
  ]

  console.log(users [0]);
  console.log(users [0].age);

  // 1. Используя метод forEach() вывести каждый элемент массива в консоль

  users.forEach(el => console.log(el));

  // 2. Используя метод forEach(), вывести имя каждого юзера в консоль

  users.forEach(el => console.log(el.first_name));

  // 3. Создайте новый массив, в который попадут только совершеннолетние юзеры.

  const adult_users = users.filter(el => el.age >= 18);

  console.log(adult_users);

  
  // 4. Найти элемент, у которого first_name Olga. Записать найденный элемент в отдельную переменную. Вывести переменную в консоль

  // .find() - возвращает первый элемент (один!), который подошел под переданное условие

// Найти число/а меньше 3

const numbers = [1, 2, 3, 4, 5];

const n1 = numbers.find(el => el < 3); // возвращает элемент
const n2 = numbers.filter(el => el < 3); // возращает массив со всеми элементами

console.log(n1);
console.log(n2);

// Напишите функцию, которая принимает 3 числа и возвращает большее из них

// Напишите функцию, которая принимает 3 числа и возвращает большее из них. Не используйте Math.max()

const max_num = (a, b, c) => Math.max(a, b, c);

console.log(max_num(1, 2, 3)); // 3
console.log(max_num(5, 22, 4)); // 22

const max_num2 = (a, b, c) => {
    if (a > b && a > c) {
      return a
    } else if (b > a && b > c){
      return b
    } else {
      return c
    }
  }
  
  console.log(max_num2(1, 2, 3)); // 3
  console.log(max_num2(5, 22, 4)); // 22

  // 5. Создайте новый массив с возрастами юзеров
// => [27, 17, 63, 41]

const ages = users.map(el => el.age);

// console.log(ages);


const adult_ages = users.filter(el => el.age >= 18).map(el => el.age);

// console.log(adult_ages);
