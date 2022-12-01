'use strict';

function calcAge(birthYear) {
  const age = 2022 - birthYear;

  function printAge() {
    let output = `${firstName} you are born in ${birthYear} so you are ${age} years old.`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      const firstName = 'Not Pawel';
      var millenial = true;
      const str = `Oh, ${firstName} is a millenial`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
      output = 'NEW OUTPUT';
    }

    console.log(millenial);
    console.log(output);
  }
  printAge();
  return age;
}

const firstName = 'Pawel';
calcAge(1991);

//Hoisting

console.log(me);
//console.log(job);

let job = 'TL';
var me = 'Pawel';
const year = 1991;

//Functions
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;

if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);

//This keyword
console.log(this);

const calcAge1 = function (birthYear) {
  console.log(2022 - birthYear);
  console.log(this);
};
calcAge1(1991);

const calcAgeArr = birthYear => {
  console.log(2022 - birthYear);
  console.log(this);
};
calcAgeArr(1991);

const pawel = {
  birthYear: 1991,
  calcAge1: function () {
    console.log(this);
    console.log(2022 - this.birthYear);
  },
};
pawel.calcAge1();
