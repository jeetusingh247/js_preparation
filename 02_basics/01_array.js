// --> The Array object, as  with arrays in other programming languages, enables storing a collection of multiple items under a single variable name, and has members for performing common array operations.

const myArr = [0, 1, 2, 3, 4, true, "Jeetu Singh"]
const myHeroes =['mightyRaju', 'Bheema']

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[1]);

// Array Methods

// myArr.push(6) // adds value in array
// myArr.pop() //  remove last index value by default

// myArr.unshift(10)  // --> usually not recommended for larger arrays
// myArr.shift() // removed value at first index in array
// console.log(myArr.includes('Jeetu Singh')); // return true if value-present
// console.log(myArr.indexOf(3));  // return index of  array element

const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr); // string type

// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3) // slice
console.log(myn1); 
console.log("B ", myArr)

const myn2 = myArr.splice(1, 3) // splice
console.log(myn2); 
console.log("C ", myArr)




