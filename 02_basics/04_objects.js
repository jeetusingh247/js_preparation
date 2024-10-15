// const tinderUser = new Object()  // --> singleton object
const tinderUser = {} // --> non-singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: { // --> nested objects
            firstname: "Jeetu",
            lastname: "Singh"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"} // keys --> number
const obj2 = {3: "a", 4: "b"} // values --> string
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }

// The Object.assign() static method copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object.

// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2} // recommended spread operator
// console.log(obj3);


const users = [ // --> syntax used majorly for values from database
    {
        id: 1,
        email: "j@gmail.com"
    },
    {
        id: 1,
        email: "j@gmail.com"
    },
    {
        id: 1,
        email: "j@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); // --> very important
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser)); // --> less used

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // chechProperty


const course = {
    coursename: "javascript",
    price: "999",
    courseInstructor: "Jeetu"
}

// course.courseInstructor // --> not recommended when writing cleanCode

const {courseInstructor: instructor} = course // --> destructuring as "instructor"

// console.log(courseInstructor);
console.log(instructor);

// { // JSON
//     "name": "Jeetu",
//     "coursename": "javascript",
//     "price": "free"
// }

[
    {},
    {}, // used for Api calling/fetch
    {}
]
// --> use "JSON Formatter" tool for to study JSON code
