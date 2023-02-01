'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[6]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enchanced object literals
  openingHours,
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order  recived! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIng, ...otherIng) {
    console.log(mainIng);
    console.log(otherIng);
  },
};

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);

// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }

// console.log([...menu.entries()]);
/*
const rest1 = {
  name: 'Żabka',
  numGuests: 0,
};

const rest2 = {
  name: 'Biedra',
  owner: 'Olek Kwolek',
};
//OR assigement operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// nullish assigment operator (null or undefined )
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

//AND assigment operator
// rest1.owner = rest1.owner && '<Annonymous>';
// rest2.owner = rest2.owner && '<Annonymous>';

rest1.owner &&= '<Annonymous>';
rest2.owner &&= '<Annonymous>';
console.log(rest1);
console.log(rest2);
/*
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

//Nullish values: null and undefined (NOT ZERO or ' ')
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);
/*console.log('-----OR-----');
//Logical operators can USE data of any type and also RETURN or short-circuting

console.log(3 || 'Paweł');
console.log('' || 'Paweł');
console.log(undefined || null);
console.log(false || true);
console.log(undefined || 0 || '' || 'Hello world!' || null);

restaurant.numGuests = 0;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('---- AND ----');
console.log(0 && 'Paweł');
// AND operator is exacly the opposite of or as it thorws the first falsy value
//If you have only truthy values JS will continue and throw the last value
console.log(10 && 'Paweł');
console.log('Hello' && 1312 && null && 'Paweł');

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushroom', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushroom', 'spinach');

// Nullish coalescing operator
/*
// 1) Destructuring
//SPREAD - because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];

//REST - because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

console.log(pizza, risotto, otherFood);

// Rest pattern on objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 2) Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
add(2, 3);
add(5, 12, 121, 341);
add(4, 1, 31, 311);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('Beef', 'cheese', 'tomatos', 'chives');

restaurant.orderPizza('Tomato sauce');
/*
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 2,
});


const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

console.log(name, openingHours, categories);

const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 13 };
({ a, b } = obj);
console.log(a, b);

//Nested objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

//Spread operator
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);
console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocchi'];
console.log(newMenu);

//Spread opeator use cases
const mainMenuCopy = [...restaurant.mainMenu];

//join two arrays =
const menuCombined = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menuCombined);

// Iterables: strings, arrays, maps, sets. NOT objects

const str = 'Paweł';
const letters = [...str, ' ', 's.'];
console.log(letters);
console.log(...str);

// console.log(`${...str} Hypta`);

// const ingridients = [
//   prompt("Let's make pasta! Ingridient 1?"),
//   prompt("Let's make pasta! Ingridient 2?"),
//   prompt("Let's make pasta! Ingridient 3?"),
// ];

// restaurant.orderPasta(...ingridients);

//Object
const newRestaurant = { foundedIn: 2022, ...restaurant, founder: 'PH' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Wrocław';
console.log(restaurantCopy.name);
console.log(restaurant.name);

/*
//Array destrctioning = method of breaking down/unpacking arrays into variables

const arr = [2, 5, 7];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// Switching variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

const nested = [1, 2, [3, 4]];
// const [i, , j] = nested;
// console.log(i, j);

//Nested destructring
const [i, , [j, k]] = nested;
console.log(i, j, k);

//Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
*/
