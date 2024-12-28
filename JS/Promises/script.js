
// const abc = new Promise(()=>{})
// console.log(abc)

//---------------------------------

    // const xyz = new Promise((resolve, reject)=>{
    //     setTimeout(()=>{
    //         resolve({firstName: "Rajesh", age: 23})
    //     },2000)
    // })
    // console.log(xyz)
    // xyz.then(dta => console.log("data: ",dta))

//----------------------------------------------------------------------

    // const promiseThree = new Promise(()=>{
    //     setTimeout(()=>{
    //         return "Rajesh"
    //     },1000)
    // })

    // console.log(promiseThree)
    // promiseThree.then((dta)=>{
    //     console.log("data: ",dta)
    // })


    //compare above code     without resloving promise will in pending state 
//--------------------------------------------------------------------

// const promiseFour = new Promise((resolve, reject) => {
//     let data = true
//     if(data){
//         resolve({firstName: "Ponna", year: 2001})
//     }else{
//         reject("Errpr: Something went wrong")
//     }
// } )

//     let dta2 = promiseFour.then((dta)=>{
//             console.log(dta)
//         })
//     console.log("info: ",dta2)
//     let dta3 = promiseFour.catch((dta)=>{
//             console.log(dta)
//         })
//     console.log("info: ",dta2)
//     console.log("info: ",dta3)
//     dta2.then((a)=> console.log("❤️", a))



    // let dta3 = promiseFour.then((dta=>{
    //     console.log(dta)
    //     return dta.firstName
    // }))
    // console.log("info: ",dta3)
    // dta3.then((a)=> console.log("❤️", a))

    // var vv = null
    // promiseFour.then((dta=>{
    //     console.log(dta)
    //     vv =  dta
    // }))
    // console.log("info: ",vv)

//solution

    // promiseFour.then((dta)=>{
    //     return dta.firstName
    // }).then((dta)=>{
    //     console.log(dta)
    // })


//------------------------------------------------------------------------
    
// const promiseFive = new Promise((resolve, reject) => {
//     let data = true
//     if(data){
//         resolve({firstName: "Ponna", year: 2001})
//     }else{
//         reject("Errpr: Something went wrong")
//     }
// })

// promiseFive.then((dta)=>{
//     console.log(dta)
// })

//----------------

// const promiseFive = new Promise((resolve, reject) => {
//     let data = false
//     if(data){
//         resolve({firstName: "Ponna", year: 2001})
//     }else{
//         reject("Errpr: Something went wrong")
//     }
// })

// promiseFive.then((dta)=>{
//     console.log(dta)
// })

//------------------

// const promiseFive = new Promise((resolve, reject) => {
//     let data = false
//     if(data){
//         resolve({firstName: "Ponna", year: 2001})
//     }else{
//         reject("Error: Something went wrong")
//     }
// })
// promiseFive.then((dta)=>{
//     console.log(dta)
// }).catch( dta => console.log(dta))

//----------------------Promise witha async -----------------------------------

    // const promiseFive = new Promise((resolve, reject) => {
    //     let data = true
    //     if(data){
    //         resolve({firstName: "Ponna", year: 2001})
    //     }else{
    //         reject("Error: Something went wrong")
    //     }
    // })
    // const fun = async () =>{
    //     const repsone = await promiseFive
    //     console.log(repsone)
    // }
    // fun()

//-----

    // const promiseFive = new Promise((resolve, reject) => {
    //     let data = false
    //     if(data){
    //         resolve({firstName: "Ponna", year: 2001})
    //     }else{
    //         reject("Error: Something went wrong")
    //     }
    // })

    // const fun2 = async () =>{
    //     const repsone = await promiseFive
    //     console.log(repsone)
    // }
    // fun2()

//-----

    // const promiseFive = new Promise((resolve, reject) => {
    //     let data = false
    //     if(data){
    //         resolve({firstName: "Ponna", year: 2001})
    //     }else{
    //         reject("Error: Something went wrong")
    //     }
    // })
    // const fun3 = async () =>{
    //     try{
    //         const repsone = await promiseFive
    //         console.log(repsone) 
    //     }catch(err){
    //         console.log(err)
    //     }
    // }
    // fun3()

//---

    // const promiseFive = new Promise((resolve, reject) => {
    //     let data = true
    //     if(data){
    //         resolve({firstName: "Ponna", year: 2001})
    //     }else{
    //         reject("Error: Something went wrong")
    //     }
    // })
    // let hello = null
    // const fun = async () =>{
    //     const repsone = await promiseFive
    //     console.log(repsone)
    //     data = repsone
    // }
    // fun()
    // console.log(hello)


//---------------------------------------------------------------------------
// function asyncOperation() {
//     return new Promise((resolve, reject) => {
//         const success = true; 
//         if (success) {
//             resolve("Data loaded successfully!"); 
//         } else {
//             reject("Error loading data.");
//         }
//     });
// }


// asyncOperation()
//     .then(result => {
//         console.log(result);
//         console.log("Operation succeeded." );
//     })
//     .catch(error => {
//         console.log("Operation failed: " + error);
//     });