const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){ // using function keyword
//     console.log(val);
// } )

// coding.forEach( (item) => { // using arrow functin
//     console.log(item);
// } )

// function printMe(item){ 
//     console.log(item);
// }

// coding.forEach(printMe) // referenced

// coding.forEach( (item, index, arr)=> { // multiple parameters
//     console.log(item, index, arr); 
// } )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => { // very useful in database
    
    console.log(item.languageName); // print all language names
} )