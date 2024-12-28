//spread operator
// The spread operator (...) is used to expand an iterable (like an array, string, object) into individual elements. 

//Spread Operator
    const num = [ 1, 2, 3, 4, 5]
    // console.log(...num)

//Copying an array
    const num2 = [ 1, 2, 3, 4, 5]
    const num3 = [ ... num2]
    // console.log(num3)

    const myObje = {
        firstName: "Rajesh_p",
        age: 23
    }
    const updatedObj = {...myObje, DOB: "22-03-2001"}
    // console.log(updatedObj) 

//Merging an Array
    const num4 = [ 1, 2, 3, 4, 5,]
    const num5 = [45, 65, 78, 75, 89, 87]
    const myName = "Rajesh"

    const num6 = num4.concat(num5)
    // const num6 = [...num4, ...num5]
    // const num6 = [...num4, ...num5, ...myName]

    // console.log(num6)

//Passing a Multiple Arguments to a Function
    const num7 = [ 1, 2, 3, 4, 5,]

    function abc(a, b, c, d, e){
        // console.log(a, b, c, d, e)
    }

    abc(...num7)



//----------------------------------------------------------
//Rest Operator

//The rest operator (...) is used to collect multiple arguments into an array

const num10 = [1, 2, 3, 4, 5]

    function axy(...a){
        // console.log(a)
    }
    axy(...num10)


    function xyz(...a){
    return a.reduce((acc, cuu) => acc + cuu)
    }

    //Converting arguments into array [...arguments]
    //1
    // function xyz(...a){
    // return [...arguments].reduce((acc, cuu) => acc + cuu)
    // }

    //2
    // function xyz(...a){
    // return Array.from(arguments).reduce((acc, cuu) => acc + cuu)
    // }



const result = xyz(...num10)
// console.log(result)


// Spread Operator (...) in arguments: Expands an array into individual elements.
// Rest Operator (...) in parameters: Collects multiple arguments into an array.