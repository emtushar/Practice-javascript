class User{
    constructor(username){
this.username = username;
    }
    logMe(){
        console.log(`Hello ${this.username}`)
    }

    // static will restrict any other instanceof user to access this function 
    static createId(){
        console.log(`1w3a${this.username}`)
    }
}

class Admin extends User{
    constructor(username,email){
        super(username)
        this.email = email;
    }
    okay(){
        console.log("OKayyyyyyyy")
    }
}


const tushar = new User ("emtushar")
const tanishk = new Admin("tanishk","tanishk@hisa.com")

// console.log(tushar)
// console.log(tanishk)
tanishk.okay()
// tushar.okay()

// tushar.logMe();
// tanishk.logMe();
// tushar.createId()
// tanishk.createId()
