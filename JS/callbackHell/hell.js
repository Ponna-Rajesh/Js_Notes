//Synchronus
// function waitForThreeSeconds(){
//     let ms = 2000 + new Date().getTime()
//     while(new Date() < ms){}
// }


// function register(){
//     waitForThreeSeconds()
//     console.log("Register end")
// }

// function sendEmail(){
//     waitForThreeSeconds()
//     console.log("Email end")
// }

// function login(){
//     waitForThreeSeconds()
//     console.log("Login end")
// }

// function getUserData(){
//     waitForThreeSeconds()
//     console.log("Got user data")
// }

// function displayUserData(){
//     console.log("User data display")
// }

// register()
// sendEmail()
// login()
// getUserData()
// displayUserData()

// console.log("Other Application Work!")

// ------------------------------------------------------------------------------
//Asynchronus

function register(callback, name){
    setTimeout(()=>{
        console.log("Register end: " +  name)
        callback()
    },1000) 
}

function sendEmail(cb){
    setTimeout(()=>{
        console.log("Email end")
        cb()
    },1000)
}

function login(cb){
    setTimeout(()=>{
        console.log("Login end")
        cb()
    },3000)
}


function displayUserData(){
    setTimeout(()=>{
        console.log("User data display")
    },1000)
}

//callback hell
register(()=>{
    sendEmail(()=>{
        login(()=>{
            displayUserData()
        });
    });
},"Rajesh");


console.log("Other Application Work!")

// ------------------------------------------------------------------------------