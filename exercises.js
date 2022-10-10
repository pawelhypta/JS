const myCountry = 'Poland';
const countryContinent = 'Europe';
let myCountryPopulation = 38000000;
let myLanguage;
let finlandPopulation = 6000000;
let averageCountryPopulation = 33000000;
myLanguage = 'Polish';
var description = 'Portugal is in Europe, and its 11 million people speak Portuguese';

console.log(myCountry);
console.log(countryContinent);
console.log(myCountryPopulation);
console.log(myCountryPopulation > finlandPopulation);
console.log(myCountryPopulation < averageCountryPopulation);

/*
myCountryPopulation /= 2;
myCountryPopulation /= 2;
myCountryPopulation++;
*/

console.log(myCountryPopulation);

console.log(`Portugal is in ${countryContinent}, and its 11 million people speak Portuguse`)

const belowAverage = averageCountryPopulation - myCountryPopulation;

if (myCountryPopulation > averageCountryPopulation) {
    console.log(`${myCountry}'s population  is above the average, which is ${averageCountryPopulation}.`);
} else {
    console.log(`${myCountry}'s population is ${belowAverage} below the average.`);
}

'9' - '5'; // 4
'19' - '13' + '17'; // 617
'19' - '13' + 17; // 23
'123' < 57; // false
5 + 6 + '4' + 9 - 4 - 2; // 1143

const numNeighbours = prompt('How many neighbour countries does your country have?');

const numNeighboursNumber = Number(numNeighbours);

console.log(numNeighboursNumber);
console.log(typeof numNeighboursNumber);

if (numNeighboursNumber == 1) {
    console.log('Only 1 border!');
} else if (numNeighboursNumber > 1) {
    console.log('More than 1 border');
} else if (numNeighboursNumber == 0) {
    console.log('No borders. This is an island!');
}
let sarahLanguage;
let sarahCountryPopulation;
let sarahIslandRequirement;

if (myLanguage === 'English') {
    sarahLanguage = true;
} else {
    sarahLanguage = false;
}
console.log(sarahLanguage);

if (myCountryPopulation > 500000) {
    sarahCountryPopulation = false;
} else {
    sarahCountryPopulation = true;
}
console.log(sarahCountryPopulation);

if (numNeighboursNumber > 1) {
    sarahIslandRequirement = true;
} else {
    sarahIslandRequirement = false;
}
console.log(sarahIslandRequirement);

if (sarahIslandRequirement && sarahCountryPopulation && sarahIslandRequirement) {
    console.log('This is a country for Sarah!')
} else {
    console.log('This is not a country for Sarah :(')
}

