
// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

// for (of) loop iterations
for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}


// Maps --> collection of key value pairs with unique entries in maps/collections.
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India") // --> duplicates are not allowed


// console.log(map);

for (const [key, value] of map) { // --> gives keys and values separately
    // console.log(key, ':-', value); // --> destructure of array
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value); // --> not working on objects
    
// }