//Functions

//UnParameterized Function
function hello(){  //THis is a dunction whichn prints hello World
    console.log("Hello, World")
}
hello();  //we must always call the function to execute the block of function

function sum(){
    console.log(50+40);
}
//sum(); //This will return 90 as it is the sum of 50 and 40

//Function with parameters
function sum(a,b){ //The variables a and b are called parameters
    console.log(a+b);
}
sum(4,6);//The value iniside this brackets are called arguments and are passed to the function parameters a and b

function multiply(c , d, e){
    console.log(c * d * e);
}
multiply(5,10,20);

//Anomymous Function
let tryfunc = function(){
    console.log("This is a function without a name called an anomymous Function in JavaScript")
}
tryfunc();

//Arrow Function
let arrowFunc = ()=> {
    console.log("This s a function using arrow ");
}
arrowFunc();

  let addArrow = (x, y) => x + y;  //This is an arrow function that takes two parameters x and y and returns their sum
  console.log(addArrow(10, 20)); //This will return 30 as it is the sum of 10 and 20 using arrow function

//Function with Return
function  division(a,b){
    return a/b; //This return the value of a/b to the place where the function is called
}
let result = division(4,2);
console.log(result); //This is the value returned by the division function which is 2

function name(firstname, lastname){
    console.log("Hello, I am ", firstname, lastname); //here string concatenation is used to combine the first and last name with hello
    //return firstname + "" + lastname
}
name("Isha", "Karki");
//let fullname = name("Isha", "Karki"); //We can assign a variable to thereturn value also in this way
//name("Isha", "Karki"); 

