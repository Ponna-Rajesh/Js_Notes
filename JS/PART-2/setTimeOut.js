

// setTimeout('hi')

// const dj = "Heloo"
// setTimeout('dj')

// setTimeout('console.log('Rajesh')')
// setTimeout('console.log("Rajesh")')

// setTimeout('console.log("Nizamabad")',2000)
// setTimeout('console.log("Rajesh Ponna"); console.log("How r You")',2000)

// setTimeout('console.log("Rajesh Ponna"); 
// console.log("How r You")',2000)

//BackTicks Multiple Lines
// setTimeout(`console.log("Rajesh Ponna"); 
// console.log("How r You")`,2000)

//--------------------------------------------------------------------------
//setTimeOut return random id 
//1
    // const timer1 = setTimeout('console.log("Hello-1")', 2000)
    // const timer2 = setTimeout('console.log("Hello-3")', 3000)
    // const timer3 = setTimeout('console.log("Hello-4")', 4000)
    // console.log(timer1, timer2, timer3) // id value randomly given 

//clearTimeOut
    // const time1 = setTimeout('console.log("Rajesh-1")', 2000)
    // const time2 = setTimeout('console.log("Ponna-3")', 3000)
    // const time3 = setTimeout('console.log("Kanna-4")', 4000)
    // clearTimeout(time2)
    //time2 is not in console.log

//clearInterval
    // const t1 = setTimeout('console.log("Nzb-1")', 1000)
    // const t2 = setTimeout('console.log("Hyd-3")', 3000)
    // const t3 = setTimeout('console.log("Kmd-4")', 4000)
    // clearInterval(t2)

//both clearTimeout and clearInterval works same in this situation

//---------------------------------------------------------------------
    // const ab = setTimeout(a, 2000)
    // function a(){
    // return console.log("Rajesh_kanna ")
    // }

    // const xy = setTimeout(x, 2000, "rajesh", true, 34, {userName: "kanna"}, [1, 2, 3, 4])
    // function x(){
    //     console.log(arguments)
    // }

//-------------------------------------------------------
//Which will print first

    // setTimeout(`console.log("first")`, 2000)
    // setTimeout(`console.log("second")`, 0)
    // setTimeout(`console.log("Thrid")`, 3000)
    // console.log("Rajesh")

//--------------------------------------------------------

// const numId = setInterval(`console.log('rajesh')`, 1000)
// // clearInterval(numId)
