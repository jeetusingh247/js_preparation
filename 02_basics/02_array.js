const akhand_powers =["chandragupt", "Buddha", "Arjun", "Ram", "HanumanJi"]

const rishi_muni = ["ashtavakra", "aaryabahtta", "dronacharya", "rishiVashisth"]

// akhand_powers.push(rishi_muni)

// console.log(akhand_powers); // --> merged arrays act as single element
// console.log(akhand_powers[5]); // --> solution

// const all_powers = akhand_powers.concat(rishi_muni)
// console.log(all_powers) // --> both array are merged by elements

// const all_newPowers = [...akhand_powers, ...rishi_muni] // spread operator
// console.log(all_newPowers);

// const ano_arr = [1, 2, 3, [8, [4, 5, 6], 7, [4, 5]]]
// const bc_arr = ano_arr.flat(Infinity)
// console.log(ano_arr);
// console.log(bc_arr) // --> values are auto spreadOut

console.log(Array.isArray("Jeetu")) // --> false
console.log(Array.from("Jeetu")); // --> [ 'J', 'e', 'e', 't', 'u' ]
console.log(Array.from({name: "Jeetu"})); // emptyarray --> interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)) // gives combined values in array











