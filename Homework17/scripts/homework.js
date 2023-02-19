// ДЗ
// Создать форму для сбора данных о работниках
// Форма имеет 5 полей для сбора данных: имя, фамилия, ставка, кол-во отработанных дней, ссылка на фото
// Собирать полученные данные, формировать из них объект и добавлять этот объект в массив workers
// Из массива workers формировать карточку работника.
// Карточка работника должна содержать 2 параграфа (имя/фамилия, зарплата = ставка * кол-во дней) и фото работника
// Стилизовать карточки на свой вкус

const workers_form = document.querySelector('.workers_form');
const workers_container = document.querySelector('.workers_container');

const workers = [];

workers_form.addEventListener('submit', (event) => {
  event.preventDefault();
  const { firstname, lastname, rate, days, photo } = event.target;

  workers.push({
    id: Date.now(),
    firstname: firstname.value,
    lastname: lastname.value,
    rate: rate.value,
    days: days.value,
    photo: photo.value
  });

  firstname.value = '';
  lastname.value = '';
  rate.value = '';
  days.value = '';
  photo.value = '';

  render_worker_card(workers);
});

const render_worker_card = workers => {
  workers_container.innerText = '';
  const workers_cards = workers.map(({ firstname, lastname, rate, days, photo }) => {
    const card = document.createElement('div');
    const nameElem = document.createElement('p');
    const salaryElem = document.createElement('p');
    const photoElem = document.createElement('img');

    nameElem.innerText = `${firstname} ${lastname}`;
    salaryElem.innerText = `Salary: ${rate * days}`;

    photoElem.setAttribute('src', photo);
    photoElem.setAttribute('alt', `${firstname} ${lastname}`);

    card.append(photoElem, nameElem, salaryElem);
    return card
  });
  workers_container.append(...workers_cards);
}
