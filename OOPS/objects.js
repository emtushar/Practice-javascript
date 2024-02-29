function User(username,useremail,score){
this.username = username,
this.useremail = useremail,
this.score = score;
// this.greeting = function(){
//     console.log(this.useremail)
// }

}


User.prototype.increment = function(){
    this.score++
    console.log(`${this.score}`)
}

const userOne = new User ("emtushar     ","emtushare@gmail.com",4)
const userTwo = new User ("tu-shar","tu-shar@gmail.com",7)

// userOne.increment()


// Object.prototype.truelength = function(){
//     console.log(`${this}`)
//     console.log(`${this.username.trim().length}`)
// }
User.prototype.truelength = function(){
    console.log(`${this}`)
    console.log(`${this.username.trim().length}`)
}

userOne.truelength();
