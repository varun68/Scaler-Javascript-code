// objects provided unordered collection of data
// in js objects are in key value pair

var person={
    firstname:'Adam',
    secondname:'Smith',
    age:25,
    owncar:false
}



//console.log(person)


//dot notation

console.log(person.age)

//bracket notation

console.log(person['firstname'])


var cap = {
    firstname:'Steve',
    lastname:'Rogers',
    age: 102,

    friends: ['Buck Barnes', 'Bruce Banner', 'Tony Stark'],

    address:{
        state: 'New York',
        city: {
            name:'Brooklyn',
            pincode: 123456
    }
    }
}


console.log(cap.friends[1])

console.log(cap.address.city.name)

cap.isAvenger = false

console.log(cap)

cap.movies = ['Age of ultron', 'Thor', 'Captain America']

console.log(cap)


//delete

delete cap.age

console.log(cap)