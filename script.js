/*
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

const now = 2022;
const agePawel = now - 1991;
const ageAntek = now - 2020;
console.log(agePawel, ageAntek);

console.log(agePawel / 2, ageAntek * 5, 2 ** 3)
//2 ** 3 means 2 to the power of 3 = 2 * 2 * 2 = 8

const myFirstName = 'Pawel';
const myLastName = 'Hypta';
console.log(myFirstName + ' ' + myLastName);

let x = 10 + 5; // 15
x += 10 // x = x + 10
x *= 4 // x = x * 4 = 100
x++; // x = x +1 = 101;
x--; // x = x -1 = 100;
x--; // x = x -1 = 99
console.log(x);

// Comparison operator 
console.log(agePawel > ageAntek);
console.log(agePawel >= 18);

const isFullAge = agePawel >= 18;

let z, y;
z = y = 25 + 15 - 30;
console.log(z, y);

const averageAge = (agePawel + ageAntek) / 2;
console.log(averageAge);
*/

const firstName = 'Pawel';
const job = 'Software Tester';
const birthYear = 1991;
const now = 2022;

const pawel = "I'm " + firstName + ', a ' + (now - birthYear) + ' years old ' + job + '!';

console.log(pawel);

//Templare literals
const pawelNew = `I'm ${firstName}, a ${now - birthYear} years old ${job}!`;

console.log(pawelNew);

// multiple lines either with \n\ or a `` backticks and press enter

console.log('Multiple\n\
lines\n\
test.')

console.log(`Multiple
lines
test.`)

