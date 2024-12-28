const myObj = {
    firstName: "Rajesh",
    'last name': "Kannna",
     age: 23
}


// console.log(myObj['last name'])
// console.log(myObj['firstName'])
// console.log(myObj.age)

// console.log(Object.keys(myObj))
// console.log(Object.values(myObj))
// console.log(Object.entries(myObj))


const obj2 = {
    name: "Lucky",
    age: 21
}

// console.log(Object.assign(myObj, obj2))
// console.log({...myObj , ...obj2})
// console.log(myObj.hasOwnProperty('firstName'));

// Deleting property
    // console.log(myObj)
    // console.log(delete myObj.firstName)
    // console.log(myObj)
    // console.log(delete myObj["last name"])
    // console.log(myObj)

//Adding property
    // myObj.Number = 674633874
    // console.log(myObj)

//-------------------------------------------------------------//

//seal
Object.seal(myObj)

// we cant add
myObj.AdditionalNum = 9948144092
// console.log(myObj)

// we cant delete
delete myObj.Number
// console.log(myObj)

//Existing Property we can ( Modify)
myObj.name = "RajeshKanna"
// console.log(myObj)

// Seal we cant "Add" and "delete" the properties in object but we can modify or change the things which are in object

// ------------------------------------------------------------//
const hello = {
    firstName: "RAjesh",
    lastName: 'Ponna',
    DOB: 2001
}

// We cant "Add" or "Delete" or "Modified" = Object.freeze()

// console.log(hello)
// Object.freeze(hello)

//Modify
hello.firstName = "Kanna"
// console.log(hello)

//Add
hello.Area = "Nizamabad"
// console.log(hello)

//Delete
delete hello.DOB
// console.log(hello)



//--------------------------------------------------------//
// IN keyword use check waythere property exists in object
const college = {
    school: "vvhs",
    inter: "ush",
    msc: "city"
}

// console.log('school' in college) 
// console.log('degree' in college)


