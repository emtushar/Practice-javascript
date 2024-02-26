const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");

// startBtn.addEventListener("click",function(){
// setTimeout(function(n){
// console.log(n,Date.now())
// },1000,"tushar")
// },false)

const printFunc = function(n){
    console.log(n ,Date.now())
    }
let timeoutId;
   const startFunc  = function(){
   timeoutId = setInterval(printFunc , 5000,"tushar")
}    

startBtn.addEventListener("click",startFunc,false)


stopBtn.addEventListener("click",function(){
    clearInterval(timeoutId)
    timeoutId = null;
    console.log("GFds")
},false)
