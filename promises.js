// const promiseOne = new Promise(function(resolve,reject){
// setTimeout(() => {
//     console.log("Async Task 1");
//     resolve()
// }, 1000);
// });
// promiseOne.then(function(){
//     console.log("Promise consumed")
// })



// new Promise(function(resolve,reject){
// // Async Task
// setTimeout(() => {
//     console.log("Async Task 2")
//     resolve()
// }, 1000);
// }).then(()=>{
//     console.log("Promise 2 consumed")
// })


// const promiseThree = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("ASync Task 3")
//         resolve({username:"emtushar",email:"emtushare@gmail.com"})
//     },1000)
// })
// promiseThree.then(function(user){
// console.log(user)
// })


// const promiseFour = new Promise(function(resolve,reject){
// setTimeout(function(){
//     console.log("Async task 4")
//     let error = false
//     if(!error){
//         resolve({username:"tushar",email:"kaushiktushar6892@gmail.com"})
//     }
//     else{
//         reject("ERR:Something went wrong")
//     }
// }, 1000)
// }).then((user)=>{
//     console.log(user)
//     return user.username
// }).then((username)=>{
// console.log(username)
// })
// .catch((err)=>{
//     console.log(err)
// })
// .finally(()=>{
//     console.log("promise is either resolved or rejected")
// })



// const promiseFive = new Promise(function(resolve,reject){

//     setTimeout(function(){
//         console.log("Async Task 5")
//         let error = true;
//         if(!error){
//             resolve({username:"js",email:"js@example.com"})
//         }
//         else{
//             reject("Err: JS went wrong")
//         }
//     },1000)
// })


// async function consumePromiseFive(){
//     try {
//         const response = await promiseFive
//         console.log(response);
//     } catch (error) {
//         console.log(error)
//     }

// }

// consumePromiseFive()



// fetch keyword

// async function getAllUsers(){
//     try {
//         const response = await fetch("https://dummyjson.com/users");
//         const data = await response.json()
//         console.log(data); 
//     } catch (error) {
//         console.log("Err:",error);
//     }

// }
// getAllUsers()



fetch("https://dummyjson.com/users").then((response)=>{
return data = response.json()
})
.then((data)=>{
console.log(data);
})
.catch((err)=>{console.log("Err :",err);})
.finally(()=>{
    console.log("Promise is either resolved or rejected")
})