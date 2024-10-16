// Immediately Invoked Function Expressions (IIFE)


(function naam(){
    // named IIFE
    console.log(`DB CONNECTED`);
})(); // used to avoid global scope problem/pollution

( (name) => { // unamed IIFE
    console.log(`DB CONNECTED TWO ${name}`);
} )('Jsingh')
