// console.log('working'); 

// 1. Data Types


// A light switch that can be either on or off.

// boolean - if (lightswitch = true) {
//     return on
// } else {
//     return off
// }

// A user's email address.
// string 
// const emailAddress = "kmolumby@gmail.com"

// A spaceship with a hull, laser blasters, tractor beam, and warp drive.
// array 

// const spaceship = ['hull', 'laser blasters', 'tractor beam', 'warp drive']

// A list of student names from our class.

// array

// const student = ['Kelly', 'Max', 'Phil']

// A list of student names from our class, each with a location.

// object 

// const students = {
//     kelly: {
//         location: 'denver',
//     }

//     max: {
//         location: 'denver', 
//     }

//     phil : {
//         location: 'denver',
//     }
// }
// A list of student names from our class, each with a location and each with a list of favorite tv shows.

// const students = {
//     leslie: {
//         location: 'denver',
//         tvshows: ['friends', 'parks and rec']
//     }

//     ron: {
//         location: 'denver', 
//         tvshows: ['this old house', 'home improvement']
//     }

//     april : {
//         location: 'denver',
//         tvshows: ['the twighlight zone', ]
//     }
// }


// 2. Take it Easy
// Make an array that holds all of the colors of the rainbow.

const rainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

// Write code that will access "blue" from the rainbow array.

console.log(rainbow[4]);


// Make an object that is called your name and holds the information about your favorite food, a hobby, the name of the town that you live in currently, and your favorite datatype.

const kelly = {
    favoriteFood: 'lasagna',
    hobby: 'photography',
    currentTown: 'Denver',
    favoriteDataType: 'object'
}
// Write code that will access your hobby from the object that you just created.
console.log(kelly.hobby);