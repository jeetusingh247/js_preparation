const score = 200
console.log(score);

const bal = new Number(100) // specially define a number
console.log(bal);

console.log(bal.toString().length) // converts a num to string and give length
console.log(bal.toFixed(2)) // number of decimal values like 100.00

const num2 = 125.69696
console.log(num2.toPrecision(3))// returns precise value upto 3 digit from left to right --> 125.69696 = 126

const hundreds = 100000
console.log(hundreds.toLocaleString('en-IN')); // return number as per indian standards

// ************************ Maths ******************************
/*
console.log(Math);
console.log(Math.abs(-4));
console.log(Math.ceil(4.2)); // 5
console.log(Math.round(4.6));// 5
console.log(Math.floor(4.9));// 4
console.log(Math.sqrt(8).toPrecision(2)); // we can also do this way
// console.log(Math.sqrt(min(3, 4, 5))); cannot do this way
*/

// console.log(Math.random()); // returns value is inBetween 0-1
// console.log((Math.random()*10) + 1); 

const min = 30
const max = 80

console.log(Math.floor(Math.random() * (max - min + 1)) + min); // returns floor values
















