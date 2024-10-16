//var c = 300
let a = 300   // --> global scope
if (true) {
    let a = 10
    const b = 20 // --> block scope
    // console.log("INNER: ", a); // --> block scope
    
}



// console.log(a); // --> global scope
// console.log(b);
// console.log(c);


function one(){
    const username = "Jsingh"

    function two(){
        const website = "mailPrep"
        console.log(username); // --> child func can access parent func variables
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "Jsingh"
    if (username === "Jsingh") {
        const website = "PrepBuddy"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){  // --> Case 1
    return num + 1     
}



addTwo(5)
const addTwo = function(num){    // --> Case 2
    return num + 2      // --> throws error
}