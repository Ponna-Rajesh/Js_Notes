// function CreateUser3(firstName, lastName, age){
//     this.firstName = firstName,
//     this.lastName = lastName,
//     this.age = age
// }

// CreateUser3.prototype.getBirthYear = function(){
//     return new Date().getFullYear() - this.age
// }

// CreateUser3.prototype.getFullName = function(){
//     return this.firstName + " "+  this.lastName
// }

// const user3 = new CreateUser3("rajesh", "ponnna", 23)
// const user4 = new CreateUser3("raghava", "chinna", 19)
// console.log(user3)
// console.log(user4)
// //IMP
// console.log(CreateUser3.prototype)
// NOTE : we are using .prototype .prototype twicly so we use Classes for thiss

//------------------------Classes-----------------------------------

class CreateUser{

}
// console.log(CreateUser)

//-----------------------------

class CreateUser2{

}
// console.dir(CreateUser2)

//------------------------------
// "⭐ Classes are used to create instances (or objects) that provide a way to define properties and methods, encapsulating data and behavior in a structured manner."

class CreateUser3{

}
const user1 = new CreateUser3
// console.log(user1)

//------------------------------------------

class CreateUser4{
    getBirthYear = function(){
        return new Date().getFullYear() - this.age
    }
    
    getFullName = function(){
        return this.firstName + " "+  this.lastName
    }
}
const user2 = new CreateUser4
// console.log(user2)

//----------------------------------------------------------

class CreateUser5{
    constructor(a, b, c){
        this.firstName = a
        this.lastName = b
        this.age = c
    }


    getBirthYear = function(){
        return new Date().getFullYear() - this.age
    }
    
    getFullName = function(){
        return this.firstName + " "+  this.lastName
    }
    func(a){
        console.log(a)
    }
}

const user3 = new CreateUser5('Rajesh', 'ponna', 23)

// console.log(user3)
// console.log(user3.getBirthYear())
// console.log(user3.getFullName())
// user3.func("RAJESH⭐")

//----------------------------------------------------------------------------------------
//⭐. Extends Keyword
    // The extends keyword in JavaScript classes is used to create a subclass (child class) that inherits properties and methods from another class (parent class), allowing the subclass to extend or modify the parent class's functionality.

//1️⃣ONE
    // Animal is Parent Class
        // class Animal {
        //     constructor(name, age) {
        //     this.name = name;
        //     this.age = age;
        //     }
        
        //     speak() {
        //     console.log(`${this.name} makes a sound.`);
        //     }
        // }

    //Dog is Child Class or Derived Class
        // class Dog extends Animal {
            
        // }
    
        // const myDog = new Dog('Buddy', 2);
        // console.log(myDog)
        // console.log(myDog.name)
        // myDog.speak()


    //All properties and methods of Parent class present in child class now (It can achieve using extends keyword)

//---------------------------------------
//2️⃣TWO ERROR
// Animal is Parent Class
        // class Animal {
        //     constructor(name, age) {
        //     this.name = name;
        //     this.age = age;
        //     }
        
        //     speak() {
        //     console.log(`${this.name} makes a sound.`);
        //     }
        // }

    // Dog is Child Class or Derived Class
        // class Dog extends Animal {
        //     constructor(speed){
        //         this.speed = speed
        //     }
        // }
    
        // const myDog = new Dog('Buddy', 2, 45);
        // console.log(myDog)
        // console.log(myDog.name)
        // myDog.speak()

//Solution:  when you create a subclass using extends, you must call super() in the subclass constructor before you can use this.

//Without calling super(), the subclass won't have access to properties and methods inherited from the parent class, and JavaScript will throw an error.


//⭐NOTE: BUT IN CASE OF 1️⃣ IMP
    //"When the constructor is not defined in a subclass, JavaScript 'implicitly' adds a default constructor that calls super(). 

    //If you define a constructor in the subclass without calling super(), it throws an error because super() must be called before using this in the subclass.

//------------------------
//4️⃣ FOUR
// Animal is Parent Class
    // class Animal {
    //     constructor(name, age) {
    //     this.name = name;
    //     this.age = age;
    //     }

    //     speak() {
    //     console.log(`${this.name} makes a sound.`);
    //     }

    //     dada(){
    //         return console.log('la la la ')
    //     }
    // }

// Dog is Child Class or Derived Class
    // class Dog extends Animal {
    //     constructor(speed){
    //         super()
    //         this.speed = speed
    //     }
    // }

    // const myDog = new Dog('Buddy', 2, 45);
    // console.log(myDog)

    // console.log(myDog.name)
    // console.log(myDog.speed)

    // myDog.dada()
    // myDog.speak()

//---------------------------------------------
//5️⃣ I.FIVE ⭐⭐⭐⭐⭐💚
// ⭐"When super() is called in the subclass constructor, it executes the constructor of the parent class, passing the provided arguments to it."

// // Animal is Parent Class
// class Animal {
//     constructor(name, age) {
//     this.name = name;
//     this.age = age;
//     }

//     speak() {
//     console.log(`${this.name} makes a sound.`);
//     }

//     dada(){
//         return console.log('la la la ')
//     }
// }

// // Dog is Child Class or Derived Class
// class Dog extends Animal {
//     constructor(name, age, speed){
//         super(name, age)
//         this.speed = speed
//     }
// }

// const myDog = new Dog('Buddy', 2, 45);
// console.log(myDog)

// console.log(myDog.name)
// console.log(myDog.speed)

// myDog.dada()
// myDog.speak()

//------------------------
//6️⃣ II.SIX { MOdify speak() }

// Animal is Parent Class
// class Animal {
//     constructor(name, age) {
//     this.name = name;
//     this.age = age;
//     }

//     speak() {
//     console.log(`${this.name} makes a sound.`);
//     }

//     dada(){
//         return console.log('la la la ')
//     }
// }

// // Dog is Child Class or Derived Class
// class Dog extends Animal {
//     constructor(name, age, speed){
//         super(name, age)
//         this.speed = speed
//     }

//     speak(){
//         return console.log("eated ....")
//     }
// }

// const myDog = new Dog('Buddy', 2, 45);
// console.log(myDog)

// console.log(myDog.name)
// console.log(myDog.speed)

// myDog.dada()
// myDog.speak()

//JavaScript check speak in subClass first .If not present it goes to parent class










