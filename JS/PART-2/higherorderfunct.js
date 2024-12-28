
//Higher Order Function
function a(ba){
    ba()
}

//Callback Function
function b(){
    console.log("Rajesh Kanna")
}
a(b)

// Higher-Order Function: A function that takes one or more functions as arguments, returns a function, or both.

// Callback Function: A function passed as an argument to another function, which is then executed inside the higher-order function.


// A pure function is a function that:
    // Always returns the same output for the same input.
    // Has no side effects, meaning it doesn't modify external variables, data, or states outside the function.

    //Pure Function
    function add(a, b) {
        return a + b;  // No side effects, always returns the same result for the same inputs
    }

    //Impure Funtion
    let count = 0;
    function increment() {
    count++;  // Modifies external state (count), so it's not a pure function
    }

    

