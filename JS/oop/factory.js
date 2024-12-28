// const user1 = {
//     firstName: "Rajesh",
//     lastName: "Ponna",
//     age: 23
// }

// const user2 = {
//     firstName: "Yuvraj",
//     lastName: "sanju",
//     age: 23
// }

// console.log(user1)
// console.log(user2)

//-----------------------------------------------------------------------------

//Factory Function
    // A factory function is a pattern used to create and return multiple instances of similar objects

    // Instead of using a constructor function or class to create objects

    // Encapsulation: The creation logic is encapsulated within the factory function, making the code cleaner and easier to maintain.

    // No new Keyword: Unlike constructors, factory functions do not require the new keyword to create an instance.

    function factory(name, surname, age){
        const user = {
            firstName: name,
            lastName: surname,
            age: age,
            getYears(){
                return new Date().getFullYear() - user.age
            }
        }
        return user
    }

                    // or both are similar 

    // function factory(firstName, lastName, age){
    //     const user = {
    //         firstName,
    //         lastName,
    //         age,
    //         getYears(){
    //             return new Date().getFullYear() - user.age
    //         }
    //     }
    //     return user
    // }


    const userdta1 = factory('rajesh', 'ponna', 23)
    const userdta2= factory('raghava', 'chinna', 20)
    console.log(userdta1)
    console.log(userdta2)

    console.log(userdta1.getYears())
    console.log(userdta2.getYears())

    //1.IMP different memory location
    console.log("memory: ",userdta1.getYears === userdta2.getYears) 

    const arr1 = [1,2]
    const arr2 = [2,3]
    //same memory location
    console.log(arr1.pop === arr2.pop)

 //Imp
    //Conulsion: One of the drawbacks of factory functions is that they create new copies of methods for each instance, which can lead to increased memory usage, especially when creating many instances.

    //Instead use either constructor functions with prototype methods or ES6 classes, allowing shared methods across instances to reduce memory usage.


// This pattern is useful when you need to create many objects with similar structures but possibly different data.
