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