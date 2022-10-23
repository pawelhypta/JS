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

console.log(fruitProcessor1(3, 7));


const calcAge = function (birthYear) {
    return 2022 - birthYear;
}

const yearsUntillRetirement1 = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement1 = 65 - age;
    if (retirement1 > 0) {
        console.log(`${firstName} can retire in ${retirement1} years.`);
        return retirement1;
    } else {
        console.log(`${firstName} should be retired for ${Math.abs(retirement1)} years already.`);
        return -1;
    }
}

console.log(yearsUntillRetirement1(1991, 'Paweł'));
console.log(yearsUntillRetirement1(1951, 'Janina'));

//Arrays

const friend1 = 'Mark';
const friend2 = 'Rasim';
const friend3 = 'Nejc';

const portalTeam = ['Mark', 'Rasim', 'Nejc'];
console.log(portalTeam);

const years = new Array(1991, 1992, 1995, 2020);

console.log(portalTeam[0]);
console.log(portalTeam[2]);

console.log(portalTeam.length);
console.log(portalTeam[portalTeam.length - 1]);

portalTeam[2] = 'Luka';
console.log(portalTeam[2]);

const pawel = ['Pawel', 'Hypta', 2022 - 1991];

console.log(`My name is ${pawel[0]} ${pawel[1]} and I'm ${pawel[2]} years old.`);


const years1 = [1991, 1971, 1960, 1951];

const age4 = calcAge(years1[0]);
const age5 = calcAge(years1[1]);
const age6 = calcAge(years1[3]);

console.log(age4, age5, age6);

const ages = [calcAge(years1[0]), calcAge(years1[1]), calcAge(years1[3])];

console.log(ages);
//Add eletemts to array
const friends = ['Tom', 'Jack', 'Martin'];
const newLenght = friends.push('Andrew'); //add to the end
console.log(friends);
console.log(newLenght);

friends.unshift('John'); // add to the begining
console.log(friends);

//Remove elements to array
friends.pop();   //Remove last
console.log(friends);

friends.shift(); // Remove first
console.log(friends);

console.log(friends.indexOf('Martin'));

console.log(friends.includes('Martin'));
console.log(friends.includes('Many'));

if (friends.includes('Peter')) {
    console.log('You have a friend called Peter');
}

//Objects

const pawelArray = [
    'Pawel',
    'Hypta',
    2022 - 1991,
    'tester',
    ['Tim', 'Kayle', 'Cartman']
];

const pawelHypta = {
    firstName: 'Pawel',
    lastName: 'Hypta',
    age: 2022 - 1991,
    profession: 'tester',
    friends: ['Tim', 'Kayle', 'Cartman']
};
console.log(pawelHypta);
//Read data from objects

//Dot notation

console.log(pawelHypta.lastName);
console.log(pawelHypta.friends[1]);

//Bracket notation
console.log(pawelHypta['lastName']);

const nameKey = 'Name';

console.log(pawelHypta['first' + nameKey]);
console.log(pawelHypta['last' + nameKey]);

const interestedIn = prompt('What do you want to know about Pawel? Choose between firstName, lastName, age, profession, friends');

console.log(pawelHypta[interestedIn]);


