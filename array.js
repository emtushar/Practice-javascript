// const firstArray = [3,7,2,9,1,4];
// const secondArray = [1,5,2,6,8,3];
// const oneArray = firstArray.slice(1,4);
// const twoArray = secondArray.splice(1,4);
// console.log(firstArray,secondArray,oneArray,twoArray)

// console.log(firstArray.join(","));
// console.log(firstArray);

// splice does include the end value but it will manipulate/modify the original array
// slice does not include the end value it will not affect the original array


// Some Interesting Js Arrays Methods

const marvelHeroes = ["Thor","Ironman","Hulk"]
const dcHeroes = ["batman","superman","flash"]
// marvelHeroes.push(dcHeroes);
//appends element in the array and returns the length of array after appending

// console.log(marvelHeroes);

// const newArray = marvelHeroes.concat(dcHeroes,marvelHeroes)//combine the arraysand return a new array without modifying the previous arrays

// console.log(newArray)

// const newArray = [...marvelHeroes,...dcHeroes,...["e","r","w"]];
// console.log(newArray)


// const newArray = Array.isArray("tushar"); //returns a boolean
// const newArray = Array.from("tushar")//only works on iterable to convert them into array
// const newArray = Array.from(34567) //does not work,since no. is not iterable,returns []
// const newArray = Array.from({name:"tushar"}) //have to specify which key needs to be converted ,otherwise returns []
// const newArray = Array.of(marvelHeroes,dcHeroes) //returns a array of arrays
// console.log(newArray)