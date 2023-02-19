// LET, CONST, VAR

// VAR - устаревший способ, до 2015. Глобальная область видимости

var age = 27;
var age = 29;
age = 30;

var a = 10;

if(a > 9){
  var a = 12
}

function incrNum (){
  var a = 15;
  a++
}

console.log(a); // 12



// LET - блочная область видимости

let number = 12;
number = 14;

// if (a > 9) {
//   let number = 20
//   console.log(number);//20
// }

// console.log(number); //14


// CONST - блочная область видимости
const lastname = 'Ivanov';
// lastname = 'Petrov'; - нельзя

const user = {
  id: 1,
  name: 'Ivan',
  lastname: 'Petrov'
}

user.id = 2;


// Комбинирование селекторов

// Объединение селекторов
// Чтобы объединить несколько отдельных селекторов в один, скажем так, сложный селектор нужно использовать символы комбинаторы - это: ,   > ~ +.
// , Комбинатор запятая
// A, B — Это способ группировки, он выбирает все совпадающие узлы.
//   Комбинатор потомков (пробел)
// A B — Выбирает элементы, которые находятся внутри указанного элемента (вне зависимости от уровня вложенности).
// > Комбинатор дочерних селекторов
// A > B — В отличие от пробела выбирает только прямых потомков - это только дочерними элементы первого уровня.
// ~ Комбинатор всех следующих элементов
// A ~ B — Выбирает все элементы, которые идут после указанного элемента и находятся на том же уровне вложенности (с тем же родителем).
// + Комбинатор первого следующего элемента
// A + B — Выбирает элемент, который находится непосредственно после указанного элемента, если у них общий родитель.
// .c1.c2 — Элементы одновременно с двумя классами c1 и c2.

