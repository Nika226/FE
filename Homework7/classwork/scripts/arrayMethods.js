// Методы массива

// forEach() - ничего не возвращает, выполняет указанную функцию один раз для каждого элемента массива

const numbers = [1, 2, 3, 4, 5];

// 1. Вывести каждый элемент массива в консоль

// for(let i = 0; i < numbers.length; i++){
//   console.log(numbers[i])
// }

// numbers.forEach(el => console.log(el));
// numbers.forEach(el => console.log(el * 2));


// 2. Сформировать новый массив из чисел из массива numbers, умноженных на 2

const numbers2 = [];
for(let i = 0; i < numbers.length; i++){
  numbers2.push(numbers[i] * 2)
}

const numbers3 = [];
numbers.forEach(el => numbers3.push(el * 2));

// 3. Сформировать новый массив из чисел больше 3

const numbers4 = [];
numbers.forEach(el => {
  if(el > 3){
    numbers4.push(el)
  }
});


// Дан массив чисел

const nums = [45, 73, -200, 0, 544, 23, 74, 3, 2, -11, -43];

// 4. Сформировать массив из отрицательных чисел

const negative_nums = [];
nums.forEach(el => {
  if(el < 0){
    negative_nums.push(el)
  }
});