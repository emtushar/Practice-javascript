// class User{
//     constructor(username,email,password){
//     this.username = username;
//     this.email = email;
//     this.password = password
//     }
//     encryptPassword(){
//         return `dw${this.password}ifdjo`
//     }

//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const userOne = new User("emtushar","emtu@gmail.com","345t5")

// console.log(userOne)
// console.log(userOne.encryptPassword())
// console.log(userOne.changeUsername())



// function User(username,email,password){
//     this.username = username;
//     this.email = email;
//     this.password = password;
//     this.encryptPassword = function(){
//         return `${this.password}kjkd`
//     }
//     this.changeUsername = function(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const userOne = new User("emtushar","frj@hgjhs.xom","ohi3434")

// console.log(userOne.encryptPassword())
// console.log(userOne);
// console.log(userOne.changeUsername());


class User{

constructor(username){
    this.username = username;
}

logMe(){
    console.log(`Username is ${this.username}`);
}
}


class Teacher extends User{

    constructor(username,email,password){
        super(username);
        this.email = email;
        this.password = password
    }

    teachCourse(){
        console.log(`This course is taught by ${this.username}`);
    }

}


// const userOne = new User("emusji","meok@ije.com","owiduwij");
// const teacherOne = new Teacher("ssji","wqok@ije.com","oeeeeeeeeefgwedduwij");

// console.log(userOne);
// console.log(userOne.logMe());
// console.log(teacherOne);
// teacherOne.teachCourse();


const praveen = new Teacher("praveen","praveen@ex.com","pra344");
const tushar = new User ("emtushar","emtusha@ex.com","em589n");

console.log(praveen);
console.log(tushar);
praveen.teachCourse();
praveen.logMe();

tushar.logMe();
// tushar.teachCourse();

console.log(tushar === praveen)
console.log(tushar === User)
console.log(praveen == Teacher)
console.log(tushar instanceof User);
console.log(praveen instanceof User);
console.log(praveen instanceof Teacher);
console.log(tushar instanceof Teacher);



