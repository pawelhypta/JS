//Coding challenge #1

//Test data 1: Koalas scores: 65, 54, 49; Dolphins scores: 44, 23, 71
const calcAvgScore = (s1, s2, s3) => (s1 + s2 + s3) / 3;

const koalasAvgScore1 = calcAvgScore(65, 54, 49);
const dolphinsAvgScore1 = calcAvgScore(44, 23, 71);
console.log(koalasAvgScore1, dolphinsAvgScore1);

const checkWinner = function (koalasAvgScore1, dolphinsAvgScore1) {
    if (koalasAvgScore1 > dolphinsAvgScore1 * 2) {
        console.log(`Koalas win ${koalasAvgScore1} vs ${dolphinsAvgScore1 * 2}.`);
        return koalasAvgScore1 - dolphinsAvgScore1 * 2;
    } else if (dolphinsAvgScore1 > koalasAvgScore1 * 2) {
        console.log(`Dolphins win ${dolphinsAvgScore1} vs ${koalasAvgScore1 * 2}.`);
        return dolphinsAvgScore1 - koalasAvgScore1 * 2;
    } else if (koalasAvgScore1 == dolphinsAvgScore1 * 2 || dolphinsAvgScore1 == koalasAvgScore1 * 2) {
        console.log(`We have a draw.`);
    } else {
        console.log('Nobody wins.')
    }
}

checkWinner(koalasAvgScore1, dolphinsAvgScore1);

// Test data 2 Koalas scores: 23, 34, 27; Dolphins scores: 85, 54, 41

const koalasAvgScore2 = calcAvgScore(23, 34, 27);
const dolphinsAvgScore2 = calcAvgScore(85, 54, 41);

const checkWinner2 = function (koalasAvgScore2, dolphinsAvgScore2) {
    if (koalasAvgScore2 > dolphinsAvgScore2 * 2) {
        console.log(`Koalas win ${koalasAvgScore2} vs ${dolphinsAvgScore2 * 2}.`);
        return koalasAvgScore2 - dolphinsAvgScore2 * 2;
    } else if (dolphinsAvgScore2 > koalasAvgScore2 * 2) {
        console.log(`Dolphins win ${dolphinsAvgScore2} vs ${koalasAvgScore2 * 2}.`);
        return dolphinsAvgScore2 - koalasAvgScore2 * 2;
    } else if (koalasAvgScore2 == dolphinsAvgScore2 * 2 || dolphinsAvgScore2 == koalasAvgScore2 * 2) {
        console.log(`We have a draw.`);
    } else {
        console.log('Nobody wins.')
    }
}

checkWinner(koalasAvgScore2, dolphinsAvgScore2);
checkWinner(1111, 1);
checkWinner(1000, 500);
checkWinner(500, 1000);
checkWinner(10, 21);

//Coding challenge #2

let tip;

function calcTip(bill) {
    if (bill < 50 || bill > 300) {
        return tip = bill * 0.2;
    } else {
        return tip = bill * 0.15;
    }
}

console.log(calcTip(100));

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);

const total = [bills[0] + tips[0],
bills[1] + tips[1],
bills[0] + tips[2]];
console.log(total);

// Coding challenge #3

const mark = {
    fullName: 'Mark Miller',
    bodyMass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.bodyMass / (this.height ** 2);
        return this.bmi;
    }
}
mark.calcBMI();
console.log(mark.bmi);

const john = {
    fullName: 'John Smith',
    bodyMass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.bodyMass / (this.height ** 2);
        return this.bmi;
    }
}
john.calcBMI();
console.log(john.bmi);

if (john.bmi > mark.bmi) {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi}).`)
} else {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi}).`)
}


const bills4 = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

let tips4 = [];
let total4 = [];

for (i = 0; i < bills4.length - 1; i++) {
    tips4[i] = calcTip(bills4[i])
    total4[i] = bills4[i] + tips4[i];
}

console.log(tips4);
console.log(total4);

let sum = 0;
for (i = 0; i < bills4.length - 1; i++) {
    sum + total4[i];
}
console.log(sum);
