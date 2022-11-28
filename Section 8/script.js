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
console.log(job);

let job = 'TL';
var me = 'Pawel';
