//const changBtn = document.querySelector('.chang_btn');
//const chang_text = document.querySelector('.chang_text');

//changBtn.addEventListener('click', ()=> {
 //   chang_text.style.backgroundColor = 'green';
//})

const createBtn = document.querySelector('.create_btn');

const parContainer = document.querySelector('.par_container');

createBtn.addEventListener('click', () => {
   const newPar = document.createElement ('p');
   newPar.innerText = 'good morning';
   newPar.style.color = 'red';
   newPar.style.fontSize = '20px';
   parContainer.append(newPar);
   });

  const par_1 = document.querySelector('.par_1');
  const par_2 = document.querySelector('.par_2');

  par_1.addEventListener('click',() => {
    par_2.style.fontSize = '24px';
  });

  par_2.addEventListener('click', () => {
    par_1.style.color = 'green';
    par_1.style.backgroundColor = 'pink';
  });


  