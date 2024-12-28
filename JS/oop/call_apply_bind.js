

//-------🦚 CALL APPLY AND BIND--------------

    //The apply() method is similar to call(), but it takes an array of arguments instead of individual arguments.
    //⭐ call() and apply() invoke the function immediately.
    // bind() creates a new function that can be called later.

//--------------------------------------------------------

// const user1 = {
//     firstName: "Ponna",
//     lastName: "Rajesh",
//     age: 23,
//     about(){
//         console.log(this.firstName, this.age)
//     }
// }

// const  user2 = {
//     firstName: "Chinna",
//     lastName: "Kanna",
//     age: 7,
// }

// user1.about.call(user2)
// user1.about.call()

//-------------------------------------------------

// const user1 = {
//     firstName: "Ponna",
//     lastName: "Rajesh",
//     age: 23,
//     about(game, love){
//         console.log(this.firstName, this.age, game, love)
//     }
// }

// const  user2 = {
//     firstName: "Rohit",
//     lastName: "Kanna",
//     age: 45,
// }

// user1.about.call(user2,"Cricket","Javascript")

//-----------------------------------------------------------


function about(game, love){
    console.log(this.firstName, this.age, game, love)
}

const user1 = {
    firstName: "Ponna",
    lastName: "Rajesh",
    age: 23,
}

const  user2 = {
    firstName: "Rohit",
    lastName: "Kanna",
    age: 45,
}
//Call Apply Bind

// about.call(user2,"Cricket","Javascript")
// about.apply(user2,["Cricket","Javascript"])
const func = about.bind(user2,"Cricket","Javascript")
console.log(func)
console.log(func())


// call() and apply() invoke the function immediately.
// bind() creates a new function that can be called later.

//-----------------------------------------------------------




