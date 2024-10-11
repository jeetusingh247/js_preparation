/* --> JavaScript Date objects represent a single moment in time in a platform-independent format. Date objects encapsulate an integral number that represents milliseconds since the midnight at the beginning of January 1, 1970, UTC (the epoch). */

let myDate = new Date()
console.log(myDate); // 2024-10-11T14:00:49.405Z
console.log(myDate.toString()); // Fri Oct 11 2024 14:00:49 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString()); // Fri Oct 11 2024
console.log(myDate.toDateString()); // Fri Oct 11 2024
console.log(myDate.toISOString()); // 2024-10-11T14:00:49.405Z
console.log(myDate.toLocaleDateString()); // 10/11/2024
console.log(myDate.toJSON()); // 2024-10-11T14:04:33.631Z
console.log(typeof(myDate)); // gives Object

let myCreatedDate = new Date(2024, 7, 6)
console.log(myCreatedDate.toLocaleDateString());  // 8/6/2024
// console.log(myCreatedDate.toDateString()); // Tue Aug 06 2024
let anotherDate = new Date("01-14-2024")
console.log(anotherDate.toLocaleString()); // 1/14/2024, 12:00:00 AM

let myTimeStamp = Date.now()

// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime())
console.log(Math.floor(Date.now()/1000)); // return floor time in seconds

let nDate = new Date()
console.log(nDate);
console.log(nDate.getMonth() + 1); // returns Month + 1
console.log(nDate.getDay()); // returns Day

nDate.toLocaleDateString('default', {
    weekday: 'long',
    // timeZone
})



