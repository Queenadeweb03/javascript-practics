'use strict';

/*const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, italy',
  categories: ['Italian', 'pizzeria', 'vegetarian', 'organic'],
  starterMenu: ['focaccia', 'bruschatta', 'Garlic', 'Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
};

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

//const [first, second] = restaurant.categories;
//console.log(first, second);

//to skip one to another
let [first, , second] = restaurant.categories;
console.log(first, second);
//or

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

//switching variables
//const temp = main;
//main = secondary;
//secondary = temp;
//console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);*/

/*const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, italy',
  categories: ['Italian', 'pizzeria', 'vegetarian', 'organic'],
  starterMenu: ['focaccia', 'bruschatta', 'Garlic', 'Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};
//how to return value from a function
console.log(restaurant.order(2, 0));
//destruction method
const [starter, main] = restaurant.order(2, 0);
console.log(starter, main);

//nested destructing
//const nested = [2, 4, [5, 6]];
//const [i, , j] = nested;
//console.log(i, j);

const nested = [2, 4, [5, 6]];
const [i, , [j, k]] = nested;
console.log(i, j, k);

//default value
//const [p, q, r] = [8,9]
//console.log(p,q, r);

const [p, q, r = 3] = [8, 9];
console.log(p, q, r);*/

/*const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, italy',
  categories: ['Italian', 'pizzeria', 'vegetarian', 'organic'],
  starterMenu: ['focaccia', 'bruschatta', 'Garlic', 'Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);
//or

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

//default value
const { menu = [], starterMenu: starter = [] } = restaurant;
console.log(menu, starter);

//mutating variable
let a = 111;
let b = 993;
const obj = { a: 23, b: 56, c: 54 };
({ a, b } = obj);
console.log(a, b);

//nested object
const {
  fri: { open, close },
} = openingHours;
console.log(open, close);*/

/*const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, italy',
  categories: ['Italian', 'pizzeria', 'vegetarian', 'organic'],
  starterMenu: ['focaccia', 'bruschatta', 'Garlic', 'Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '22:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be deliver to ${address} at ${time}`
    );
  },
};
restaurant.orderDelivery({
  time: '22:30',
  address: 'kuje abuja',
  mainIndex: 2,
  starterIndex: 2,
});
restaurant.orderDelivery({
  address: 'kuje abuja',
});
//spread operator
const menuCopy = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menuCopy);*/

//Iterable: Arrays, maps, sets and strings and not Objects

/*const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, italy',
  categories: ['Italian', 'pizzeria', 'vegetarian', 'organic'],
  starterMenu: ['focaccia', 'bruschatta', 'Garlic', 'Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },
  //real world example
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },
};

const ingredient = [
  //prompt("let's makes pasta! Ingredient 1"),
  //prompt('Ingredient 2'),
  //prompt('Ingredient 3'),
];

console.log(ingredient);
restaurant.orderPasta(...ingredient);*/

//objects spread
/*const newResturance = { founderedIn: 1998, ...restaurant, founder: 'Adeola' };
console.log(newResturance);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Adeleke Sulaikha';
console.log(restaurantCopy.name);
console.log(restaurant.name);

//SPREAD, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];

//REST, because on left side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, ...others);
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

//object rest
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
add(2, 3);
add(5, 3, 9, 5);
add(8, 3, 9, 6, 7, 1);
const x = [23, 5, 8];
add(...x);*/

/*const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, italy',
  categories: ['Italian', 'pizzeria', 'vegetarian', 'organic'],
  starterMenu: ['focaccia', 'bruschatta', 'Garlic', 'Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },
  orderPizza: function (mainIngredient, ...otherIngredient) {
    console.log(mainIngredient, otherIngredient);
    //or
    console.log(mainIngredient, ...otherIngredient);
  },
};

restaurant.orderPizza('mushroom', 'onion', 'olive', 'spinach');

//LOGICAL OPERATORS: can use data type, can return ANY data type and they can do short-circuiting. short-circuiting mean if first value is a truth value it will immediatly return first value
console.log(3 || 'jonas');
console.log('' || 'jonas');
console.log(true || 0);
console.log(undefined || null);
console.log(undefined || 0 || '' || 'hello' || 23 || null);

restaurant.numGuest = 0;
const guest1 = restaurant.numGuest ? restaurant.numGuest : 10;
console.log(guest1);

//Nullish: null and undefined (not 0 or '')
const guestCorrect = restaurant.numGuest ?? 10;
console.log(guestCorrect);

const guest2 = restaurant.numGuest || 10;
console.log(guest2);

console.log('--- AND ---');
console.log(0 && 'jonas');
console.log(7 && 'jonas');

console.log('hello' && 23 && null && 'jonas');

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushromms', 'spinach');
}
//OR
restaurant.orderPizza && restaurant.orderPizza('mushromms', 'spinach');



const rest = {
  name: 'Capri',

  //numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: 'Capri klop',
  owner: 'Glovinna',
};
//rest.numGuests = rest.numGuests || 10;
//rest2.numGuests = rest2.numGuests || 10;

//rest.numGuests ||= 10;
//rest2.numGuests ||= 10;

rest.numGuests ??= 10;
rest2.numGuests ??= 10;

rest2.owner = rest2.owner && 'ANONYMOUS';
rest.owner = rest.owner && 'ANONYMOUS';

console.log(rest);
console.log(rest2);*/
