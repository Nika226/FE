const task_info = document.querySelector('.task_info');
let idNum = 1;

const render_task = ({ title, completed }) => {
  task_info.innerText = '';

  const taskCard = document.createElement('div');
  const taskElem = document.createElement('p');
  const statusElem = document.createElement('p');

  const status = completed ? 'done' : 'not done';
  const background_color = completed ? 'lightgreen' : 'lightgray';

  taskElem.innerText = `Task: ${title}`;
  statusElem.innerText = `Status: ${status}`;

  taskCard.classList.add('task_card');
  taskCard.style.backgroundColor = background_color;

  taskCard.append(taskElem, statusElem);
  task_info.append(taskCard);
}

const getTask = id => {
  fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res => res.json())
    .then(json => render_task(json))
}

getTask(idNum);

const [ left_btn, right_btn ] = document.querySelectorAll('.triggers button');

left_btn.addEventListener('click', () => {
  if (idNum === 1) {
    idNum = 201
  }
  getTask(--idNum)
});

right_btn.addEventListener('click', () => {
  if(idNum === 200){
    idNum = 0
  }
  getTask(++idNum)
});
