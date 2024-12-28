const evenNum = [0, 2, 4 , 6, 8]
const animals = ["lion", "tiger", "ship", "deer"]
// console.log(evenNum)

// ---------------------------------------

//Shift
evenNum.shift()
// console.log(evenNum);

// --------------------------------------------

//Unshift
evenNum.unshift(76)
// console.log(evenNum)

//--------------------------------------

//concat
// console.log(evenNum.concat(animals))
// console.log(evenNum)

const addedArray1 = evenNum.concat(animals)
const addedArray2 = animals.concat(evenNum)
// console.log(addedArray1)
// console.log(addedArray2)

//--------------------------------------

// indexof
// console.log(animals.indexOf('tiger'));
// console.log(animals.indexOf('rat'));

//-----------------------------------

//includes
// console.log(animals.includes("tiger"))
// console.log(animals.includes("rat"))

//------------------------------------

//reverse
// console.log(animals)
// animals.reverse()
// console.log(animals)

//------------------------------------

//sort
// const num = [77, 33, 45, 2.0, 0.75, 3]
// console.log(num.sort())
// console.log(num)

// console.log(animals.sort())

//------------------------------------

const animals2 =  ["lion", "tiger", "ship", "deer", "cat", "rat", "monkey"]

//join() 
    // console.log(animals.join(" *_* "))

//toString()
    // const a = animals2.toString()
    // console.log(a)

    // toString() converts the entire array into a comma-separated string.
    // join(separator) does the same but allows you to specify a custom separator between the elements.

//----------------------------------------------------------- 


//Slice ( Doesnt Change the original array)

    // console.log("start: ",animals2)
        // console.log(animals2.slice())
        // console.log(animals2.slice(2))
        // console.log(animals2.slice(2,5))
    // console.log("End:  ",animals2)


//------------------------------------
//Splice( Change the original array)

    // console.log(animals2.splice())
    console.log(animals2)

    // console.log(animals2.splice(2))
    // console.log(animals2)

    // const axy = animals2.splice(2,3)
    // console.log(axy)
    // console.log(animals2)

    // console.log(animals2)
    // console.log(animals2.splice(2, 3))
    // console.log(animals2)


//forEach() is Array method
//Map
//Filter
//reduce




