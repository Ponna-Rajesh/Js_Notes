//Memoization is a technique in programming that' improves function performance' by caching the results of expensive function calls and' returning the cached result' when the "same inputs occur again".
` or`
//Memoization increases the "performance of a function "by storing the results of previous function calls, which prevents the re-execute the "same function with the same inputs, "

//---------Before Memoization-------------------
  function x(){
    return function (a){
    // console.log("Data: ", a)
        return a
    }
  }

  const data = x()
  console.log(data(7))

  //reture ayyina function ki 7 pamputhunav

//----------------------

// Memoization function
function memoizeSquare() {
    const cache = {}; // Cache object to store results
    return function (num) {
      if (cache[num]) {
        console.log("Fetching from cache:", num);
        return cache[num]; // Return cached result if it exists
      } else {
        console.log("Calculating result:", num);
        const result = num * num; // Calculate the square
        cache[num] = result; // Store the result in the cache
        return result;
      } 
    };

  }
  
  const square = memoizeSquare();
  
  console.log(square(5)); // Output: Calculating result: 5, 25
  console.log(square(5)); // Output: Fetching from cache: 5, 25
  console.log(square(6)); // Output: Calculating result: 6, 36
  console.log(square(6)); // Output: Fetching from cache: 6, 36
  