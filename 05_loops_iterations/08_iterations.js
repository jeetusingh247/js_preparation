const Nums = [1,2,3,4]

// reduce without arrow functions

// const Total = Nums.reduce(function (acc, current) {
//     console.log(`acc : ${acc} and current : ${current}`);
//     return acc + current
// }, 0)

const myTotal = Nums.reduce( (acc, curr) => acc + curr, 0) // using arrow func
console.log(myTotal); // Ans : 6


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);