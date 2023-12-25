

//you can never reassign if the variable is a constatnt
const varname1 = 'Hello!';
console.log(varname1);
const $name = 'Raisa';
console.log($name);

//Single line comment
//Creating a variable using var keyword
var variablename = 'test';
console.log(variablename);

//creating a variable using let keyword
let varname3 = 'test'
console.log('varname3');

//Variable Nameing
//1.The name should be unique
//2.The names should not be any reserved keyword.
//3.The names must stART with a character or a _ or a $ sign

console.log('varname1');


//String
//datatype to represent text
//type of variables in string 
//single quote, double quote both are identical.
//back ticks string is complex string 
//backticks provide extended functionality.
//They allow us to embedd the variables and expressions into string by wrapping them with $sign and {}

const exampleString = 'Example String';
console.log(exampleString);

const singlequotes = 'Single Quote String value';
console.log(singlequotes);

const doublequotes = 'Double Quote String value';
console.log(doublequotes);

const myname ='Raisa';
//const backticks = `Hello!, ${myname}, Welcome to JS session!`;
const backticks = `The Sum of two numbers is ${2 + 2}!`;
console.log(backticks);
//To give you the type of string of type backticks
console.log(typeof backticks);

//NUMBERS

const wholeNumber = 5;
const decimalNumber = 0.5;
console.log(wholeNumber);
console.log(decimalNumber);

const firstNumber = 5;
const secondNumber = 10;
const result = firstNumber + secondNumber;

console.log(result);
console.log(typeof result);

//Booleans - It can be TRUE Or FALSE
const isCool = true;
console.log(isCool);
console.log(typeof isCool);

if(isCool)
{
    console.log("Yo Man! You are cool");
}
else{
    console.log("Oh, Hi Man!");
}

//NULL and UNDEFINED
let age = null;
age = 20;

console.log(age);

// undefined
let x;

//Objects - can contain any data types strings, numbers, arrays 
const person = {
    rname: 'Ishaan',
    rage: 25,
}

//dot notation
console.log(person.rname);
console.log(typeof person);  //object
console.log(typeof person.rname); //String
console.log(typeof person.rage) // number

//Array
const array = [1, 2, 3, 4, 5]
console.log(array);

//Date
const date = new Date();
console.log(date);

//Staticly typed and Dynamically typed languagges
// Static - each variable and expression type has already known had compile time

//a variable in JS can be a string in one moment and a number in another moment
//dynamic  - they can receive different data types

let message = 'Hello! JS';
console.log(message);
console.log(typeof message);

message = 5; //redeclaring the variable
console.log(message);


