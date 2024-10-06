/*
let score = "jsingh74"
let score2 = null
let score3 = undefined
let score4 = true

console.log(typeof score);
console.log(typeof (score));

// Type Conversion(string --> number)
let valInNum1 = Number(score);
let valInNum2 = Number(score2);
let valInNum3 = Number(score3);
let valInNum4 = Number(score4);
console.log("the value of score is: ",valInNum1); // Not a number
console.log("the value of score2 is: ",valInNum2); // 0
console.log("the value of score3 is: ",valInNum3); // Not a number
console.log("the value of score4 is: ",valInNum4); // 1
*/

let isLoggedIn = 1;

let boolisLoggedIn = Boolean(isLoggedIn)
console.log(boolisLoggedIn) // true => 1 and false => 0
// "" --> false and when we use "jeetusingh" --> true

let someNum = 33;
let strNum = String(someNum);
console.log("string number result : ", strNum);
console.log("string number type : ", typeof strNum);
