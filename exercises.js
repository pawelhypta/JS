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



