
//----------------------------------------------------------------------

    // function getYears(){
    //     console.log(this)
    // }
    
    // function factory(name, surname, age){
    //     const user = {
    //         firstName: name,
    //         lastName: surname,
    //         age: age,
    //         getYears
    //     }
    //     return user
    // }

    // const userdta1 = factory('rajesh', 'ponna', 23)
    // const userdta2= factory('raghava', 'chinna', 20)
    // console.log(userdta1)
    // console.log(userdta2)

    //1 
    // getYears()  //this points to global object

    //2
    // userdta1.getYears() // this points to object userdata1

    //3
    // userdta2.getYears() // this points to object userdata2

//------------------------------- Error Code -------------------

    // function getYears(){
    //     return new Date().getFullYear() - user.age
    //  }
    
    // function abc(name, surname, age){
    //     const user = {
    //         firstName: name,
    //         lastName: surname,
    //         age: age,
    //         getYears
    //     }
    //     return user
    // }

    // const userdta3 = abc('rajesh', 'ponna', 23)
    // const userdta4= abc('raghava', 'chinna', 20)

//------------------------------- correct Code ----------------------
//compare factory file

    function getYears(){
        return new Date().getFullYear() - this.age
    }
    //i.imp getYears function is in global space (popluting global scape)
    
    function abc(name, surname, age){
        const user = {
            firstName: name,
            lastName: surname,
            age: age,
            getYears
        }
        return user
    }

    // const userdta3 = abc('rajesh', 'ponna', 23)
    // const userdta4= abc('raghava', 'chinna', 20)

    // console.log(userdta3)
    // console.log(userdta4)

    // //2.IMP compare factory file
    // //⭐we implimented polymorphism: one function getYears() with different rupalu🤣 example userdata3 useradat4

    // //same memory location
    // console.log("memory: ",userdta3.getYears === userdta4.getYears)

    // console.log(userdta3.getYears())
    // console.log(userdta4.getYears())

    //⭐just polymorphism implemented 2.Imp, but not abstaraction i.imp ,because function outside obj

//-------------------------------------------------------------------------
//1
    // function getBirthYear(){
    //     return new Date().getFullYear() - this.age
    // }


    // function createuser(name, surname, age){
    //     const user = {
    //         firstName: name,
    //         lastName: surname,
    //         age: age,
    //         getBirthYear
    //     }
    //     return user
    // }

    // const userdata6 = createuser('rajesh', 'ponna', 23)
    // const userdata7 = createuser('raghava', 'chinna', 20)

    // //function is an Object
        // console.log(createuser)
        // createuser.hello = "world"
        // console.dir(createuser)

//------------fucntions === Object ( Every thing is Object in Js )----------
//2    
        function createuser(name, surname, age){
            const user = {
                firstName: name,
                lastName: surname,
                age: age,
                methodsBro: createuser.commonMethods.getBirthYear
            }
            return user
        }

        //⭐ii. Doing polymorphism and abstraction ( Not populating global space ) 'hidding inside function'
        createuser.commonMethods = {
            getBirthYear(){
              return new Date().getFullYear() - this.age
            }
        }


        // console.dir(createuser)
        // console.log(createuser.commonMethods)

        // const userdata6 = createuser('rajesh', 'ponna', 23)
        // const userdata7 = createuser('raghava', 'chinna', 20)
        // console.log(userdata6)
        // console.log(userdata7)

        //3.IMP
        // console.log(userdata6.methodsBro === userdata7.methodsBro)

//----------------------------------------------------------------

//⭐"The 'prototype' property is present in all function objects, but it mainly used when the function is invoked as a constructor using the new keyword."

//🦚+Only functions have a prototype property because they're used as constructors. Arrays, objects, and strings don’t have prototype
       
        // function sayHi(){
        //     return "Rajesh"
        // }    

        // console.dir(sayHi)
        // console.log(sayHi.prototype)

//-------------- New Keyword ------------------
//1
        function sayHi2(){
             return "Rajesh"
         }   
        //  console.log(sayHi2())

//********** WHAT is Constructor Function ************************** 

//⭐Definition: A constructor function is a regular function that is invoked with the new keyword to create and initialize new objects.

//Constructor functions help in creating multiple objects with the same structure efficiently.


//******* Here's how it works:  ****************************
// Function Declaration: A constructor function is usually defined with a capitalized name to distinguish it from regular functions.

// Object Creation: When you call a constructor function with the new keyword, it creates a new object, sets the this keyword to point to that new object, and returns the object automatically.

// Property and Method Assignment: Inside the constructor function, properties and methods are assigned to the newly created object using this.

//new Keyword
//1. empty {} ni create chesthadi
//2. return chesthadi a object ni

//2
        function SayHi3(){
             return "Rajesh"
         } 
        //  console.log(new SayHi3())

//---------------- 

//3 
    function sayHi4(){
        // console.log(this)
    }   
    sayHi4()

//4
    function SayHi5(){
        // console.log(this)
    }   
    new SayHi5()

//---------------------------------------------------------------------------
//i

    function createUser2(firstName, lastName, age){
        this.firstName = firstName,
        this.lastName = lastName,
        this.age = age
    }
    const user1 = new createUser2("rajesh", "ponnna", 23)
    const user2 = new createUser2("raghava", "chinna", 19)
    // console.log(user1)
    // console.log(user2)

//IMP
    // console.log(createUser2.prototype)
    // console.log(createUser2.prototype.constructor)

//-------------------------⬇️compare ⬆️------------------------

//ii
    function CreateUser3(firstName, lastName, age){
        this.firstName = firstName,
        this.lastName = lastName,
        this.age = age
    }

    CreateUser3.prototype.getBirthYear = function(){
        return new Date().getFullYear() - this.age
    }

    CreateUser3.prototype.getFullName = function(){
        return this.firstName + " "+  this.lastName
    }

    const user3 = new CreateUser3("rajesh", "ponnna", 23)
    const user4 = new CreateUser3("raghava", "chinna", 19)
    // console.log(user3)
    // console.log(user4)
//IMP
    // console.log(CreateUser3.prototype)
    //⭐inhertiance the methods getBirthYear and getFullName from prototype 
    // console.log(user3.getBirthYear === user4.getBirthYear)

// NOTE : we are using .prototype .prototype twicly so we use Classes for this

//---------------------------------------------
//1
    for(let key in user3){
        // console.log(key)
    }

//  console.log('-------------------')

//2
    for(let key in user3){
        if(user3.hasOwnProperty(key)){
            // console.log(key)
        }
    }
//----------------------------------

// let numbers = [1,2,4]
// console.log(numbers)
// console.log(Object.getPrototypeOf(numbers))


// console.log(Array.isArray(numbers))
// numbers = {}
// console.log(Array.isArray(numbers))



