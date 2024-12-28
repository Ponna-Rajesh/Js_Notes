//Currying is a function that takes one argument at a time and returns a new function expecting the next argument.

// ---------------------------------
    function data(a){
        return function(b){
            return function(c){
                return a + b + c
            }
        }
    }
    // console.log(data(2)(6)(8))

//--------------------------------------------------------
    function eval(operation){
        return function (a){
            return function(b){
                if( operation === "sum") return a + b
                else if( operation === "sub") return a - b
                else if( operation === "multiple") return a * b
                else if( operation === "division") return a / b
                else return "operation is Invalid"
            }
        }
    }

    // console.log(eval("Sum")(2)(8))
    // console.log(eval("sum")(2)(8))

    // or

    const sum = eval("sum")
    const results = sum(2)(8)
    // console.log("Additon of data", results)
//---------------------------------------------------------

//Infinite Currying
function updateTheFunc(a){
    return function(b){
        if(b) return updateTheFunc(a + b)
        return a
    }
}

// console.log(updateTheFunc(1)(2)(3)(23)(12)())

//----------------------------------------------------------
// Currying vs Partial Application

//Partial Application
    function abc(a){
        return function (b , c){
            return a +  b + c
        }
    }

    // console.log(abc(12)(10, 5))

//Currying
    function xyz(a){
        return function(b){
            return function(c){
                return a + b + c
            }
        }
    }
    // console.log(xyz(12)(10)(5))

//-------------------------------------------------------
//DOM using Currying 

function updateingText(id){
    return function (text){
        document.querySelector("#" + id). textContent = text
    }
}

// updateingText("heading")("Rajesh")
//----------------------------------------------------------------

function curry(fn) {
    // console.log(fn.length)
    return function curried(...args) {
        // console.log(args.length, fn.length)
        if (args.length >= fn.length) {
            return fn(...args);
        } else {
            return function(...nextArgs) {
                // console.log("dta", ...args, ...nextArgs)
                return curried(...args, ...nextArgs);
            }
        }
    }
}

// Example function to be curried
const normalSum = (a, b, c, d) => a + b + c + d;

// Creating a curried version of normalSum
const totalSum = curry(normalSum);

console.log(totalSum(1)(3)(5)(7)); // Output: 16

//----------------------------------------------------------------

