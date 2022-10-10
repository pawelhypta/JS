/// Weight in kilograms, height in meters

/*
const marksWeight = 78; //test data set 1
const marksHeight = 1.69;
const johnsWeight = 92;
const johnsHeight = 1.95;
*/

const marksWeight = 95; // test data set 2
const marksHeight = 1.88;
const johnsWeight = 85;
const johnsHeight = 1.76;
//BMI = mass / height ** 2 = mass / (height * height)

const marksBMI = marksWeight / marksHeight ** 2;
console.log('Mark', marksBMI);

const johnsBMI = johnsWeight / johnsHeight ** 2;
console.log('John', johnsBMI);

const markHigherBMI = marksBMI > johnsBMI;
console.log(typeof markHigherBMI);
console.log(markHigherBMI);

if (marksBMI > johnsBMI) {
    console.log("Mark's BMI is higher than John's 💪🏻")
} else {
    console.log("John's BMI is higher than Mark's 💪🏻")
}

if (marksBMI > johnsBMI) {
    console.log(`Mark's BMI(${marksBMI}) is higher than John's (${johnsBMI}) 💪🏻`)
} else {
    console.log(`John's BMI(${johnsBMI}) is higher than Mark's(${marksBMI}) 💪🏻`)
}

//CODING CHALLENGE #3

/*
TEST DATA Dolphins: 96, 108, 89.
TEST DATA Koalas: 88, 91, 110.
*/

const avgScoreDolp = (96 + 108 + 89) / 3;
console.log(avgScoreDolp);
const avgScoreKoal = (88 + 91 + 110) / 3;
console.log(avgScoreKoal);

if (avgScoreDolp > avgScoreKoal) {
    console.log(`Dolphins won the competition by ${avgScoreDolp - avgScoreKoal} points.`);
} else if (avgDolp < avgKoal) {
    console.log(`Koalas won the competition by ${avgScoreKoal - avgScoreDolp} points.`);
} else if (avgScoreDolp >= avgScoreKoal) {
    console.log('There is a draw, we might need another game to choose a winner!');
}

/*
TEST DATA 2
Dolphins: 97, 112, 101
Koalas: 109, 95, 106
*/

const dolScore1 = 97;
const dolScore2 = 112;
const dolScore3 = 101;

const koalScore1 = 109;
const koalScore2 = 95;
const koalScore3 = 106;

let dolWins = 0;
if (dolScore1 >= 100 && dolScore1 > koalScore1) {
    dolWins++;
} else {
    dolWins + 0;
}
console.log(dolWins);

if (dolScore2 >= 100 && dolScore2 > koalScore2) {
    dolWins++;
} else {
    dolWins + 0;
}
console.log(dolWins);

if (dolScore3 >= 100 && dolScore3 > koalScore3) {
    dolWins++;
} else {
    dolWins + 0;
}
console.log(dolWins);

let koalWins = 0;
if (koalScore1 >= 100 && koalScore1 > dolScore1) {
    koalWins++;
} else {
    koalWins + 0;
}
console.log(koalWins);

if (koalScore2 >= 100 && koalScore2 > dolScore2) {
    koalWins++;
} else {
    koalWins + 0;
}
console.log(koalWins);

if (koalScore3 >= 100 && koalScore3 > dolScore3) {
    koalWins++;
} else {
    koalWins + 0;
}
console.log(koalWins);

if (dolWins > koalWins) {
    console.log(`Dolphins won the competition by ${dolWins - koalWins} wins.`);
} else if (dolWins < koalWins) {
    console.log(`Koalas won the competition by ${koalWins - dolWins} wins.`);
} else if (dolWins >= koalWins) {
    console.log('There is a draw, we might need another game to choose a winner!');
}