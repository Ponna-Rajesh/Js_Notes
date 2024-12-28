//forEach()
const arr = ["Rajesh", "kanna", "ponna", "lucky"]
    const info = arr.forEach((dta, index, arr)=>{
        //console.log(dta)
    })
    //console.log(info) // return undefined

//-----------------------------------------------------------

//Map
const Months = ["January", "February", "March", "April", "May"]

    const monthCaptial = Months.map((month)=>{
        //console.log(month)
    })
   // console.log(monthCaptial)

    const monthCaptial2 = Months.map((month)=>{
       // console.log(month)
        return month.toUpperCase()
    })
    //console.log(monthCaptial2)

    const monthCaptial3 = Months.map((month, index)=>{
    //    console.log(month, index)
    })

    const monthCaptial4 = Months.map((month, index, arr)=>{
    //    console.log(arr)
    })

//-----------------------------------------------------------

//Filter 
const animals = ["Lion", "Tiger", "Cat", "Dog", "Rats", "Monkey"]

    const animal = animals.filter((animal, i, arr)=>{
        // console.log(animal)
        return animal.toUpperCase()
    })
    // console.log(animal)

    const animal2 = animals.filter((animal, i, arr)=>{
        // console.log(animal)
        return animal.length == 3
    })
    // console.log(animal2)
    

//------------------------------------------------------