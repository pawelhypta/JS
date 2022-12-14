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

const pawel1 = ['Pawel', 'Hypta', 2022 - 1991];

console.log(`My name is ${pawel1[0]} ${pawel1[1]} and I'm ${pawel1[2]} years old.`);


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
    ['Tim', 'Kayle', 'Cartman'],
    true
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

//const interestedIn = prompt('What do you want to know about Pawel? Choose between firstName, lastName, age, profession, friends');


// //if (pawelHypta[interestedIn]) {
//     console.log(pawelHypta[interestedIn]);
// } else {
//     console.log('Wrong request! Choose between firstName, lastName, age, profession, friends');
// }

pawelHypta.location = 'Poland';
pawelHypta['twitter'] = 'No twitter';

console.log(pawelHypta);

//Challenge
console.log(`${pawelHypta.firstName} has ${pawelHypta.friends.length} friends, and his best friend is ${pawelHypta.friends[0]}`);

//Object methods
//Function attached to the object is called a METHOD
const pawel = {
    firstName: 'Pawel',
    lastName: 'Hypta',
    birthYear: 1991,
    profession: 'tester',
    friends: ['Tim', 'Kayle', 'Cartman'],
    hasDriversLicense: true,

    // calcAge: function (birthYear) {
    //     return 2022 - birthYear;
    // }

    // calcAge: function () {
    //     console.log(this);
    //     return 2022 - this.birthYear;
    // }

    calcAge: function () {
        this.age = 2022 - this.birthYear;
        return this.age;
    },

    addSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-years old ${this.profession}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`
    }
};

// console.log(pawel.calcAge(pawel.birthYear));
// console.log(pawel.calcAge(1991));
// console.log(pawel['calcAge'](1991));
console.log(pawel.calcAge());
console.log(pawel.age);

//challenge "Pawel is a 31-years old teacher, and he has a/no drivers license"

console.log(pawel.addSummary());

//Loops

console.log('Lifting weights repetition 1 🏋️‍♀️');
console.log('Lifting weights repetition 2 🏋️‍♀️');
console.log('Lifting weights repetition 3 🏋️‍♀️');
console.log('Lifting weights repetition 4 🏋️‍♀️');
console.log('Lifting weights repetition 5 🏋️‍♀️');
console.log('Lifting weights repetition 6 🏋️‍♀️');
console.log('Lifting weights repetition 7 🏋️‍♀️');
console.log('Lifting weights repetition 8 🏋️‍♀️');
console.log('Lifting weights repetition 9 🏋️‍♀️');
console.log('Lifting weights repetition 10 🏋️‍♀️');

//for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}

const types = [];
const typesPushed = [];
for (let i = 0; i < pawelArray.length; i++) {
    console.log(pawelArray[i], typeof pawelArray[i]);

    //Filling types array
    types[i] = typeof pawelArray[i];
    typesPushed.push(typeof pawelArray[i]);
}

console.log(types);
console.log(typesPushed);

const birthYears = [1991, 1954, 1962, 1998];
const ages1 = [];
for (let i = 0; i < birthYears.length; i++) {
    ages1.push(2022 - birthYears[i]);
}
console.log(ages1);

//Continue and Break
console.log('---Only STRINGS----')
for (let i = 0; i < pawelArray.length; i++) {
    if (typeof pawelArray[i] !== 'string') continue;

    console.log(pawelArray[i], typeof pawelArray[i]);
}

console.log('---Break Number----')
for (let i = 0; i < pawelArray.length; i++) {
    if (typeof pawelArray[i] === 'number') break;

    console.log(pawelArray[i], typeof pawelArray[i]);
}

//Backward looping
const backwardPawelArray = [];
for (let i = pawelArray.length - 1; i >= 0; i--) {
    backwardPawelArray.push(pawelArray[i]);
}
console.log(backwardPawelArray);

//Loop inside a loop
for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`------Starting exersise ${exercise}`);

    for (let repetition = 1; repetition < 5; repetition++) {
        console.log(`Lifting weight repetition number  ${repetition}`);
    }
}

//While loop
let rep1 = 1;
while (rep1 <= 10) {
    console.log(`Lifting weights repetition ${rep1}🏋️‍♀️ `)
    rep1++
}

let diceRoll = Math.trunc(Math.random() * 6) + 1;


while (diceRoll !== 6) {
    console.log(`You rolled a ${diceRoll}`);
    diceRoll = Math.trunc(Math.random() * 6) + 1;
    if (diceRoll === 6) console.log('You rolled six. The loop will finish.')
}