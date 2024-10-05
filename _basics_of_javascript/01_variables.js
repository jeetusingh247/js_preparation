const accountId = 74979089 // value once assigned can't be changed using const
let accountEmail = "jeetusingh@bitbuilders.com"
var accountPassword = "123456"
accountCity = "Bengaluru" // not recommended
let accountState; // underfined

// accountId = 45 // not allowed

accountEmail = "hcst@gmail.com"
accountPassword = "22334455"
accountCity = "Hyderabad"

console.log(accountId);

/*
Prefer Not to use var because of issue in
block scope and functional scope
*/

console.table([accountEmail, accountId, accountPassword, accountCity, accountState]); // way to print multiple variables


