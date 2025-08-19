//Data Type in JS
//1 String
let x = "Hello World"; //(This is a string datatype and can be written in single or double quotes)
//let x = 'Hello World'; 
//let x = "5" this is a string datatype even though it contains a number because of the quotes
console.log(x);

//2 Number
let y = 5; //this is a umber datatype which don't need quotes but if written in quotes it is a string
console.log(y);

//3 Boolean
let z = true;
//let z = false; (This is a boolean datatype which can either be true or false)
console.log(z);

let c1 = 10;
let c2= 50;
console.log(c1 < c2); // (This checks if c1 is less than c2 and returns true if it is) Returning boolean value

//4 Undefined
let a; //(any variable which is only declared butnot assigned then it is undefined datatype)
console.log(a); // (This will return undefined because a is not assigned any value)

//5 Null
let b = null; //This is a null datatype as it is assigned with a null value)
console.log(b); 

//6 Object (In JavaScript, Objects are collections of key-value pairs, same like dictionary in Python)
let dog= { name: "Tommy", age:"2", bodyColour: "Black"};
dog.name = "kali"; //We can change the value of the key in an object in this way
console.log(dog); 
console.log(dog.age); //This is only accessing the age of the dog object with its key 

//7 Array (In JS, Arrays are used to store mutiple values in a single variable, similar to lists in Python);
let name= ["isha", "Ayush", "Anish", "Aruna"];
console.log(name); 
console.log(name[3]); //This will return Aruna as it is the 4th value in the array (index starts from 0 which is position 1)
 
let array= [1, "String", true, 5, "Hello world"] //Array can contains mutiple type of data in a single varible
array[2]= "Isha"; //We can change the value of the array in this way
console.log(array); //This will return all the value in the array variable 

