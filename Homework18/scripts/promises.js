let number = 12;

// setTimeout(() => {
//   number = 100;
//   console.log(number);
// }, 3000);


const new_number = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(number = 100)
  }, 3000)
}).then(() => console.log(number));

