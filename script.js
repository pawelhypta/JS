
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
// multiline commenting select lines cmd + /

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

let age1 = 30;
age1 = 31;

const birthYear1 = 1991;
// birthYear1 = 1992;
//const day;

//var is the old way
var job3 = 'surveyor';
job3 = 'tester';

//operators

const now1 = 2022;
const agePawel = now1 - 1991;
const ageAntek = now1 - 2020;
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


const firstName1 = 'Pawel';
const job = 'Software Tester';
const birthYear = 1991;
const now = 2022;

const pawel = "I'm " + firstName1 + ', a ' + (now - birthYear) + ' years old ' + job + '!';

console.log(pawel);

//Templare literals
const pawelNew = `I'm ${firstName1}, a ${now - birthYear} years old ${job}!`;

console.log(pawelNew);

// multiple lines either with \n\ or a `` backticks and press enter

console.log('Multiple\n\
lines\n\
test.')

console.log(`Multiple
lines
test.`)


const age = 15;
const oldEnough = age >= 18

if (age >= 18) {
    console.log('Pawel can start driving license 🚗')
} else {
    const yearsLeft = 18 - age;
    console.log(`Pawel can start his driving license in ${yearsLeft} years 🫥`)
}

let century;

if (birthYear <= 2000) {
    century = 20
} else {
    century = 21
}
console.log(century);


//Type Convertion
const inpuYear = '1991';
console.log(Number(inpuYear), inpuYear); //this is still a string
console.log(Number(inpuYear) + 18);

console.log(Number('Pawel')); //results in 'NaN' - invalid number

console.log(String(1991), 1991);

/// we can convert only to number, string, boolean

// Type Coercion
console.log('I am ' + 31 + ' years old.');
console.log('23' - '10' - 3);
console.log('23' * '2');
console.log('23' / 2);

let n = '1' + 1;
n = n - 1;
console.log(n);

// 5 falsy values: 0, ' ', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(''));
console.log(Boolean(null));
console.log(Boolean(NaN));

const money = 0;   // JS will convert it to boolean so it will be a falsy value
if (money) {
    console.log("Don't spend it all");
} else {
    console.log("You should get a job");
}

let height;
if (height) {
    console.log('Height is defined 🟢');
} else {
    console.log('Height is undefined 🔴');
}

const age2 = 18;
if (age2 === 18) console.log('You just became the adult! 🎂');

if ('18' == 18) console.log('Double equal sign makes TYPE COERTION string will be converted to a number TRIPLE does not');

const usersFavNumber = Number(prompt('What is your favorite number?'));
console.log(usersFavNumber);
console.log(typeof usersFavNumber);

if (usersFavNumber === 7) {
    console.log("User's favourite number is lucky 7️⃣!");
} else if (usersFavNumber === 13) {
    console.log("User's favourite number is 13!");
} else {
    console.log('It is not 7 nor 13 but it is cool as well for sure!');
}

if (usersFavNumber !== 7) console.log('Why not 7? This is a lucky number!');


// Basic logic operators 

const hasDrivingLicense = true;
const hasGoodEyeSight = true;
const hasInstructor = false;

console.log(hasDrivingLicense && hasGoodEyeSight);
console.log(hasInstructor && hasGoodEyeSight);
console.log(hasInstructor || hasDrivingLicense);
console.log(!hasDrivingLicense); // ! = has not

const shouldDrive = hasDrivingLicense && hasGoodEyeSight;

if (shouldDrive) {
    console.log('Antek is able to drive!');
} else {
    console.log('Somone else should drive...');
}

const isTired = true;

if (shouldDrive && !isTired) {
    console.log('Antek is able to drive.')
} else {
    console.log('Antek is to tired to drive a car, he should rest before driving! ')
}