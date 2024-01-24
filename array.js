const firstArray = [3,7,2,9,1,4];
const secondArray = [1,5,2,6,8,3];
const oneArray = firstArray.slice(1,4);
const twoArray = secondArray.splice(1,4);
console.log(firstArray,secondArray,oneArray,twoArray)

console.log(firstArray.join(","));
console.log(firstArray);

// splice does include the end value but it will manipulate/modify the original array
// slice does not include the end value it will not affect the original array