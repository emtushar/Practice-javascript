class User{
    constructor(username,email,password){
    this.username = username;
    this.email = email;
    this.password = password
    }
    encryptPassword(){
        return `dw${this.password}ifdjo`
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const userOne = new User("emtushar","emtu@gmail.com","345t5")

console.log(userOne)
console.log(userOne.encryptPassword())
console.log(userOne.changeUsername())

