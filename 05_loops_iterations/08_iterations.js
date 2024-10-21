const Nums = [1,2,3,4]

// reduce without arrow functions

// const Total = Nums.reduce(function (acc, current) {
//     console.log(`acc : ${acc} and current : ${current}`);
//     return acc + current
// }, 0)

const myTotal = Nums.reduce( (acc, curr) => acc + curr, 0) // using arrow func
console.log(myTotal); // Ans : 6
