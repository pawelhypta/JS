'use strict';

function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}.`;
}

const descriptionPoland = describeCountry('Poland', 38, 'Warsaw');
const descriptionCzechia = describeCountry('Czechia', 10.5, 'Prague');
const descriptionGermany = describeCountry('Germany', 83.2, 'Berlin');

console.log(descriptionPoland);
console.log(descriptionCzechia);
console.log(descriptionGermany);

const worldPopulation = 7900; //in millions

function percentageOfWorld1(population) {
    return population / worldPopulation * 100;
}
const polandPercentageOfWorld = (percentageOfWorld1(38));
const czechiaPercentageOfWorld = (percentageOfWorld1(10.5));
const germanyPercentageOfWorld = (percentageOfWorld1(83.2));

console.log(polandPercentageOfWorld);
console.log(czechiaPercentageOfWorld);
console.log(germanyPercentageOfWorld);

const percentageOfWorld2 = function (population) {
    return population / worldPopulation * 100;
}

console.log(percentageOfWorld2(38));
console.log(percentageOfWorld2(10.5));
console.log(percentageOfWorld2(83.2));

const percentageOfWorld3 = population => population / worldPopulation * 100;

const arrowFunPolandPercPop = percentageOfWorld3(38);
console.log(arrowFunPolandPercPop);

const describePopulation = function (country, population) {
    const countryPercePopulation = percentageOfWorld1(population);
    return `${country} has ${population} milion people, which is about ${countryPercePopulation}% of the world.`;
}

console.log(describePopulation('India', 1380));
console.log(describePopulation('Bangladesh', 164.7));
console.log(describePopulation('United States', 331.9));

// Arrays

const populations = [1380, 164.7, 331.9, 38];

console.log(populations.length === 4);

const percentages = [percentageOfWorld1(populations[0]),
percentageOfWorld1(populations[1]),
percentageOfWorld1(populations[2]),
percentageOfWorld1(populations[3])];

console.log(percentages);

//Basic array operations

const neighbours = ['Austria', 'Czechia', 'Netherlands', 'Poland', 'France', 'Switzerland', 'Belgium', 'Luxemburg', 'Denmark'];

neighbours.push('Utopia');
console.log(neighbours);

neighbours.pop();
console.log(neighbours);

if (!neighbours.includes('Germany')) {
    console.log('Probably not the Central European country.')
}

const polandIndex = neighbours.indexOf('Poland');
console.log(polandIndex)
neighbours[polandIndex] = 'Republic of Poland';
console.log(neighbours);

const myCountry = {
    country: 'Poland',
    capital: 'Warsaw',
    language: 'Polish',
    population: 38000000,
    neighbours: ['Germany', 'Czechia', 'Slovakia', 'Ukraine', 'Belarus', 'Russia']
}



