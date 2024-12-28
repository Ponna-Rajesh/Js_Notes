
// let myName = "Rajesh"
// let name1 = myName
// let name2 = myName  + " Ponna"
// console.log(myName)
// console.log(name2)

//----------------------------------------------------

// let abc = {
//     firstName: "Rajesh",
//     lastName: "Ponna",
// }
// let xyz = abc
// console.log(abc == xyz)
// console.log(abc === xyz)

// -----------------------------------------------------------
//Object
    let myObj = {
        firstName: "Rajesh",
        lastName: "Ponna"
    }

    //1
    let myObj2 = {... myObj}

    //2
    let myObj3 = {}
    Object.assign(myObj3, myObj)


    // console.log(myObj == myObj2)
    // console.log(myObj === myObj3)


// -----------------------------------------------------------
// Array
    const animals = [ "Lion", "Tiger", "Rat", "Cat"]
    const anm2 = animals

    //1
    const anm3 = [...animals]
    //2
    const anm4 = Object.assign([], animals)
    //3
    const anm5 = animals.slice()
    //4
    const anm6 = [].concat(animals)

    // console.log(animals == anm2)
    // console.log(animals == anm3)
    // console.log(animals == anm4)
    // console.log(animals == anm5)
    // console.log(animals == anm6)

//----------------------------------------------------
  // I .Nested things are points to same refernce or same memory
    const objN = {
        firstName: "Rajesh",
        lastName: 'Ponna',
        subject:{
            maths: "fail",
            hindi: "fail",
            telugu: "fail",
            science: "pass"
        }
    }

    const objN2 = {...objN}
    // console.log(objN)
    // console.log(objN2)

    // objN2.firstName = "Kanna"
    // console.log(objN)
    // console.log(objN2)

    // objN2.subject.maths = "Pass .."
    // console.log(objN)
    // console.log(objN2)

//------------------------------------------

 //II .DEEP COPY
    const deepC = JSON.stringify(objN)
    // console.log(deepC)

    const objN3 = JSON.parse(deepC)
    // console.log(objN3)

    objN3.subject.hindi = "DJJJJ"

    // console.log(objN3.subject.hindi)
    // console.log(objN.subject.hindi)


//------------------------------------------------------

// Defination

//SHALLOW COPY: 
    // Shallow Copy: Copies only the first level of the object/array, and references to nested objects/arrays are shared.
    //"Changes made to the properties of nested objects in the shallow copy will affect the original object, and vice versa."


//DEEP COPY: 
    // Deep Copy: Recursively copies all levels of the object/array, creating completely independent copies.
