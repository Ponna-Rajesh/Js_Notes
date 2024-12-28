
// Destructuring in JavaScript is a convenient way to extract values from arrays or properties from objects into distinct variables.

//----------------------------------------------------------------
//Array:

const colors = [ "red", "blue", "green", "black", "white", "skyBlue", "yellow"]

// const color1 = colors[0]
// const color2 = colors[1]
// const color3 = colors[2]

const [color1, color2, color3] = colors 

const [,,,,,colorX] = colors
//or
const {5: colorY} = colors


// console.log(color1, color2, color3)
// console.log(colorX, colorY)

//------------------------------------------------------------------
//Objects:

const person = {
    firstName: "Rajesh",
    age: 23,
    address:{
        city: "Nizamabad",
        state: "Telangana"
    }
}

// const name = person.firstName
// const age = person.age
// console.log(name, age)

//----------
//Matching by Property Name

// const {firstName, age } = person
// console.log(firstName, age)

// const {firstName, job } = person
// console.log(firstName, job)

//------------
// Assigning to New Variable Names
    // const{firstName: username, age: vayasu} = person
    // console.log(username, vayasu)
    // console.log(firstName, age)


//-----------

//Nested Destructuring
    // const { address } = person
    // const { city } = address
    // console.log(city)

    //good practice
    // const { address: { city } } = person
    // console.log(city)

//---------------------------------------------------------------------
//Function

    function abc({firstName, age}){
        // console.log(firstName, age)
    }
    abc(person)
//---------------------------------------
    function ab({firstName: userRajesh, job}){
        // console.log(userRajesh, job)
    }
    ab(person)
//-------------------------------
    function ac({address: {city}}){
        // console.log(city)
    }
    ac(person)
//-----------------------------------------------------------------
//Array in function
    function ar([,,,,color]){
        // console.log(color)
    }
    ar(colors)
//----------------------
    function ar2({3: colorBro}){
        // console.log(colorBro)
    }
    ar2(colors)