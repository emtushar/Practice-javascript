function one(){
    console.log("Hello!!!")
}

one();

const result = one();
console.log(result)

function  addTwoNumbers(num1,num2){
    return num1+num2
}
console.log(addTwoNumbers(4,6));


function anotherFunction(num1,num2,...num){
return num1+num2+num;
}
console.log(anotherFunction(23,56,24,13))