// OOPS 

// 4 Pillars 
// * Abstraction
// * Inheritence
// * Polymorphism
// * Encapsulation




function User (username,useremail){
this.username = username
this.useremail = useremail
this.greeting = function(){
    console.log(this.username)
console.log(this)

}

return this
}

const userOne = new User("emtushar","emtushare@gmail.com");
const userTwo = new User("jsjlkniopk","kjcnd@gmail.com");

console.log(userOne.greeting())
console.log(userTwo.greeting())
console.log(userTwo.useremail)



