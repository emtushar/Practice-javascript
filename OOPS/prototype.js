const fruits = ["apple","banana","grapes","mango"]

const superheroes = {
    spiderman : "web",
    thor:"hammer",
}

// Array.prototype.hellotushar = function(){
//     console.log(`hello tushar`)
// }
// fruits.hellotushar()
// superheroes.hellotushar()
// Object.prototype.hellotushar = function(){
//     console.log(`hello tushar`)
// }
// fruits.hellotushar()
// superheroes.hellotushar()

fruits.__proto__ = superheroes