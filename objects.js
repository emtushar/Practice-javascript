// symbol 
const mysymb = Symbol("key1")

// object literals



const details = {
    name: "tushar",
    age : 22,
    [mysymb] : "mykey1",
    "full name":"tushar kaushik",
    city : "shamli"
}

// console.log(details.name)
// console.log(details["full name"])
// console.log( typeof details[mysymb])
// console.log(details)
// Object.freeze(details)
// details.age = 23;
// console.log(details)

const  greeting = function(){
    return `Hello,How are u?`
}

details.greeting = function(){
    return `Hello,How are u?`
}



details.greeting2 = function(){
    return `Hi,${this.name}`
}
console.log(details.greeting())
console.log(details.greeting2())


// Object Singelton
const user = new Object({name:"tushar",age:22})
console.log(user)

const book = new Object({nameOfBook:"how to be rich",year:1997,language:"english"})
console.log(book)


// const combinedUser ={user,book}
// const combinedUser =Object.assign({},user,book)
// const combinedUser ={...user,...book}

const combinedUser = Object.keys(user);
const combinedUser2 = Object.values(user);
const combinedUser3 = Object.entries(user);


console.log(combinedUser)
console.log(combinedUser2)
console.log(combinedUser3)

const myObj = {age:22,fullname:{username: {name:"tushar", lastname:"kaushik"}}}

console.log(myObj)
console.log(myObj.fullname["username"])