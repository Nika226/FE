console.log ('Hallo');

//function getMassage() {
//    console.log('function 1');
//}

//getMassage();

// function getSum() {
//     return 2 + 8;
// }

// console.log(getSum());

// const getMassage_2 = () => console.log ('function 2');

// const getSum_2 = () => 2 + 8;
// getMassage_2();

//const b = getSum_2();
//console.log(b);

function getSum() {
    return 10*12;
}
    
console.log(getSum());

const getSum_2 = () => 10 * 12;

const b = getSum_2;
console.log(b());

const getMult = () => 10 * 12;
//console.log(getMult());

const getMult2 = (num) => num * 10;
//console.log(getMult2(3));

const getMult3 = (num1, num2) => num1 + num2;
console.log(getMult3(1, 2));
console.log(getMult3(3, 2));
