// objects can declared --> as literal or constructor

// object literals

const mySym = Symbol("key1") // --> Symbol

const User = {
    name: "Jeetu", // --> key(name)-value(Jeetu) pair
    "full_name": "Jeetu Singh",
    age: 19,
    [mySym]: "mykey1",
    location: "India",
    email: "user@ninja.org.in",
    isLoggedIn: false,
    lstLogin: ["Monday", "Tuesday"]
}

// console.log(User.email); --> not Pro way
// console.log(User["full_name"]); // --> to access string key-value pair
// console.log(User[mySym]);
// console.log(typeof User[mySym]);

User.email = "user@codvita.org.in"
// Object.freeze(User)
User.email = "user@nqt.org.in"
// console.log(User);

User.greeting = function() {
    console.log("Hello User");
}
User.greetingTwo = function() {
    console.log(`Hello User ${this["full_name"]}`);   
}

console.log(User.greeting());
console.log(User.greeting);

console.log(User.greetingTwo()); // --> gives full name











