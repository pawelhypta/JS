'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can drive :D');

//const interface = 'Audio';
//const private = 534;

//Functions

function logger() {
    console.log('My name is Paweł');
}

//calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const orangeJuice = fruitProcessor(0, 5);
console.log(orangeJuice);
const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

//Function declaration
const age1 = calcAge1(1991);
function calcAge1(birthYear) {
    return 2022 - birthYear;
}

//Function expression
const calcAge2 = function (birthYear) {
    return 2022 - birthYear;
}
const age2 = calcAge2(1991);
console.log(age1, age2);

//The difference between function declaration and function expression is that we can call function declaration in the code before it is defined.


//Arrow function
const calcAge3 = birthYear => 2022 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntillRetirement = (birthYear, firstName) => {
    const currentAge = 2022 - birthYear;
    const retirement = 65 - currentAge;
    return `${firstName} retires in ${retirement} years.`;
}

console.log(yearsUntillRetirement(1991, 'Paweł'));
console.log(yearsUntillRetirement(1992, 'Justyna'));

//Functions calling other functions

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor1(lemons, watermelons) {
    const lemonPieces = cutFruitPieces(lemons);
    const watermelonPieces = cutFruitPieces(watermelons);
    const juice1 = `Juice with ${lemonPieces} pieces of lemon and ${watermelonPieces} watermelon pieces`;
    return juice1;
}

console.log(fruitProcessor1(3, 7))