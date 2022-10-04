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
console.log(marksBMI);

const johnsBMI = johnsWeight / johnsHeight ** 2;
console.log(johnsBMI);

const markHigherBMI = marksBMI > johnsBMI;
console.log(typeof markHigherBMI);
console.log(markHigherBMI);


