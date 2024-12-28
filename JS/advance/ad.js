// Debouncing in JavaScript is a technique that delays the execution of a function until a certain amount of time has passed since it was last called.

//It "Improving performance in scenarios where a function might be called repeatedly in rapid sequence., Such as when handling user input events like 'Typing' or 'Scrolling'."


// Difference: Debouncing waits until the event stops; throttling runs at regular intervals during the event.

const btn = document.querySelector('.btn-increment')
const btnPressed = document.querySelector('.inc-press')
const count = document.querySelector('.tri')

let pressedCount = 0
let triggedCount = 0

//Debouncing using lodash library
    // const debounceTrigges = _.debounce(()=>{
    //     count.innerHTML = ++triggedCount
    // }, 2000)

    // btn.addEventListener('click', ()=>{
    //     btnPressed.innerHTML = ++pressedCount
    //     debounceTrigges()
    // })

//Throttling using Lodash library
    // const throttlingTrigges = _.throttle(()=>{
    //     count.innerHTML = ++triggedCount
    // }, 1000)

    // btn.addEventListener('click', ()=>{
    //     btnPressed.innerHTML = ++pressedCount
    //     throttlingTrigges()
    // })


//     function myDebounce() {
//         let timer;
//         return function () {
//           clearTimeout(timer)
//           timer = setTimeout(() =>{
//             count.innerHTML = ++triggedCount
//         }, 1000);
//         };
//       }

// const debounceTrigger = myDebounce()

// btn.addEventListener('click', ()=>{
//     btnPressed.innerHTML = ++pressedCount
//     debounceTrigger()
// })


// How It Works in Practice:
// 1.First Click:
    // When the button is clicked, debounceTrigger() is called.
    // clearTimeout(timer) has no effect on the first click since no timer exists yet.
    // setTimeout() sets a timer to execute after 1 second.

//2. Subsequent Rapid Clicks:
    // If the button is clicked again within the 1-second delay:
    // clearTimeout(timer) cancels the current timer, preventing the callback from executing.
    // A new setTimeout() is started with another 1-second delay.
    // This process repeats with every click, continuously resetting the timer.

// 3.Callback Execution:
    // The callback inside setTimeout() only executes when the user stops clicking for at least 1 second.
    // The counter (triggedCount) increments, and the UI updates.



// Throttling function definition
// function myThrottle() {
//     let lastTime = 0; 
//     return function () {
//       const now = new Date().getTime(); 
//       console.log(now)
//       if (now - lastTime >= 3000) { 
//         count.innerHTML = ++triggedCount
//         lastTime = now; 
//       }
//     };
//   }

//   const thorrltingTriggers = myThrottle()

// btn.addEventListener('click', ()=>{
//     btnPressed.innerHTML = ++pressedCount
//     thorrltingTriggers() 
// })
