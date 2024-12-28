const obj1 = {
    key1: 'value1',
    key2: 'Rajesh'
}

const obj2 = {
    key3: 'value3'
}
// console.log(obj4)
// console.log(obj2.key2)
// console.log(obj2.key3)

//-------------------------------------------

const obj3 = {
    key1: 'value1',
    key2: 'Rajesh'
}

const obj4 = {}
obj4.key3 = 'value3'

// console.log(obj4)
// console.log(obj2.key3)
// console.log(obj2.key2)

//--------------------💚NOTE💚 IMP -----------------

    const protoObj = {
        key: 'value'
    };

    const newObj = Object.create(protoObj); // newObj's prototype is protoObj
    // console.log(newObj.key); // Outputs: 'value' (inherited from protoObj)

    // Purpose: Object.create() is used to create a new object and set its prototype (__proto__) to the object provided as the first argument.

//-------------------------------------------

// const obj5 = {
//     key1: 'value1',
//     key2: 'Rajesh'
// }

// const obj6 = Object.create(obj5)
// obj6.key3 = 'value3'

//⭐⭐⭐⭐
// console.log(obj6)
// console.log(obj6.key2)

//💚Object.create(obj7) sets obj7 as the prototype (__proto__) of the new object obj8.

//-------------------⬇️compare ⬆️--------------------------

const obj7 = {
    key1: 'value1',
    key2: 'Rajesh'
}

const obj8 = Object.create(obj7)
obj8.key2 = 'Kanna'
obj8.key3 = 'value3'

//⭐⭐⭐⭐
// console.log(obj8)
// console.log(obj8.key2)
//💚If obj8 has its own key2, it shadows key2 from its prototype (obj7).
//----------------------------------------

const obj9 = Object.create({})
// console.log(obj9)

//------------------------
