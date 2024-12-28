const person = {
    firstName: "Rajesh",
    lastName: "Ponna",
    age: 23,
    getInfo: function(){
        return person.firstName + " * " + person.lastName
    }

}

//------------------

    // console.log(person.firstName.address)
    // console.log(person.firstName.address.city)

    // console.log(person.firstName.address?.city)

//--------------------------
    // console.log(person?.['lastName'])
    // console.log(person.firstName.address?.['city'])
    // console.log(person.firstName.address.['city'])

//--------- Function ---------

    // console.log(person.getInfo())
    // console.log(person.getInfo?.())
    // console.log(person.getAddress())
    // console.log(person.getAddress?.())
