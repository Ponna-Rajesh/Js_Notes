// function abc(){
//     console.log(arguments)
// console.log(arguments[0])
// console.log(arguments[1])
// console.log(arguments[2])
// }
// abc(10, 15, 25)

// const xyz = function(){
// let num = 0;
//     for(let i=0; i<arguments.length; i++) {
//         num += arguments[i];
//     }
//     return num;
// }
// console.log("Total:  ",xyz(12,14,16))


//NOT work in arrow function
// const arrow = () => {
//     let num = 0;
//         for(let i=0; i<arguments.length; i++) {
//             num += arguments[i];
//         }
//         return num;
//     }
//     console.log("Total:  ",arrow(12,14,16))

//--------------------------------------------------------

//works in arrow function using rest parameters
// const arrow2 = (...nums) => {
//     let num = 0;
//         for(let i=0; i<nums.length; i++) {
//             num += nums[i];
//         }
//         return num;
//     }
//     console.log("Total:  ",arrow2(10,20,35))



  