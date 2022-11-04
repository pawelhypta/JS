// Remember, we're gonna use strict mode in all scripts now!
'use strict';
const temperatures = [3, 2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
console.log(temperatures);

const calcTempApltude = function (temps) {
  for (let i = 0; i < temps.lenght; i++) {
    if (temps[i] > max) max = temps[i];
  }
  console.log(max);
};

calcTempApltude([3, 7, 4]);
