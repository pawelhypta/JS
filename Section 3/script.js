// Remember, we're gonna use strict mode in all scripts now!
'use strict';
const temperatures = [3, 2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
console.log(temperatures);

const calcTempApltude = function (temps) {
  let max = temps[0];
  for (let i = 0; i < temps.lenght; i++) {
    if (temps[i] > max) max = temps[i];
  }
  console.log(max);
};

calcTempApltude([3, 7, 4]);

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celcius',

    //(C)Fix the bug
    value: Number(prompt('Degrees celcius:')),
  };
  //(B) Find the bug
  console.log(measurement);
  console.table(measurement);
  console.log(measurement.value);
  //console.warn(measurement.value);
  //console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};
//(A) Identify the bug
console.log(measureKelvin());
