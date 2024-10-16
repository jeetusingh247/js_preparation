const user = {
    username: "JeetuSingh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this); // --> "this" is used to refer current context
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function naam(){
//     let username = "JeetuSingh"
//     console.log(this.username);
// }

// naam()

// const naam = function () {
//     let username = "JeetuSingh"
//     console.log(this.username);
// }

const naam =  () => { // --> arrow function
    let username = "JeetuSingh"
    console.log(this);
}

// naam()

// const addTwo = (num1, num2) => {
//     return num1 + num2     // --> explicit return
// }

// const addTwo = (num1, num2) =>  num1 + num2 // --> implicit return

// const addTwo = (num1, num2) => ( num1 + num2 ) // --> return not needed

const addTwo = (num1, num2) => ({username: "JeetuSingh"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()