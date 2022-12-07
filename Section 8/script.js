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
  console.log(arguments);
  return a + b;
};

addExpr(2, 5);

const addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
// addArrow(2, 4, 6);  Arguments are only aviliable for regular functions

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

//method borrowing
const pawel = {
  year: 1991,
  calcAge1: function () {
    console.log(this);
    console.log(2022 - this.year);
  },
};
pawel.calcAge1();

const marian = {
  year: 2017,
};

marian.calcAge1 = pawel.calcAge1;
marian.calcAge1();

const f = pawel.calcAge1;
// f(); // this will be undefined as we are just borrowing the function
// var firstName1 = 'Marian';

const pawel1 = {
  firstName1: 'Paweł',
  year: 1991,
  calcAge1: function () {
    console.log(this);
    console.log(2022 - this.year);

    const self = this;

    const isMillenial = function () {
      console.log(self.year >= 1981 && self.year <= 1996);
    };
    isMillenial();
  },
  greet: function () {
    console.log(this);
    console.log(`Hey ${this.firstName1}`);
  },
};

pawel1.greet();
pawel1.calcAge1();

//Primitives vs Objects

let age = 30;
let oldAge = age;
age = 31;

console.log(age);
console.log(oldAge);

const me1 = {
  name: 'Pawel',
  age: 31,
};

const friend = me1;
friend.age = 35;

console.log(friend.age);
console.log(me1.age);
