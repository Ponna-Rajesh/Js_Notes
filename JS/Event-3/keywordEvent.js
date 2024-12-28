const h1 = document.querySelector('.header1')
const input = document.querySelector('.input1')

// input.addEventListener('keypress', (a)=>{
//     console.log(a.key)
//     console.log(a.code)
//     console.log(a.charCode)
//     console.log(a)
// })


//Hold and see console
    input.addEventListener('keyup', (a)=>{
        console.log(a.key)
        console.log(a.code)
        console.log(a.charCode)
        console.log(a)
    })

    input.addEventListener('keydown', (a)=>{
        console.log(a.key)
        console.log(a.code)
        console.log(a.charCode)
        console.log(a)
    })



// window.addEventListener('keypress', (b) => {
//     console.log(b)
// })