let js = "amazing";
console.log(123 + 1 + 1 + 1);
console.log("App version 1.0");

let firstName = 'Pawel';
console.log(firstName);
console.log(firstName);

let PI = 3.1415;

//Variable should start with lower cases 
//upper cases are reserved for object oriented programming
//name variables like this firstNamePerson etc.
//variables are need to be descriptive 

let job1 = 'Tester';
let job2 = 'Father';
let myJob1 = 'Tester'; /// Those are more descriptive
let myJob2 = 'Father'; ///


//types of variables 
let numbers = 12345;

//Strings - text
let letters = 'Lorem ipsum';

// Boolean - used for taking decisions
let jsAmazing = true;

// undefined 
let notSure;

//Null - empty value
//Symbol - not useful for now
//BigInt - for bigger numbers 

// multiline commenting start with /* end with * /

let javaScriptIsFun = true;

console.log(typeof true);
console.log(typeof javaScriptIsFun);
console.log(typeof 23);
console.log(typeof 'Portal');

// if we want to reassign the variable we don't need to write let
javaScriptIsFun = 'Yes!';
console.log(typeof javaScriptIsFun);
//dynamic typing
let noValue;
console.log(noValue);
console.log(typeof noValue);

console.log(typeof null);

//const and var can't be changed in the future (mutated) and can't be empty

let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1992;
//const day;

//var is the old way
var job = 'surveyor';
job = 'tester';

//operators

const agePawel = 2022 - 1991;
console.log(agePawel);