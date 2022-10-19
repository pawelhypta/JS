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