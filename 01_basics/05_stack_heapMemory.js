// Stack (Primitive), Heap (Non-Primitive)
// --> Stack makes copy whereas Heap takes same memory reference
let myAccouName = "jeetuSingh"

let anothName = myAccouName
anothName = "Bheeshma" // --> stack makes changes in copy of value

console.log(anothName);
console.log(myAccouName);

let user1 = {
    email: "someone@gmail.com",
    upi: "user@sbi"
}

let user2 = user1

user2.email = "jagranJosh@gmail.com"

console.log(user1.email);
console.log(user2.email); // in heap we are actually changing original value

