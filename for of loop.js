'use strict';

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
};

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);
//or
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}*/

/*const weekdays = ['mon', 'tue', 'wed', 'thus', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  [weekdays[6]]: {
    open: 0,
    close: 24,
  },
  [`day-${4}`]: {
    open: 0,
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, italy',
  categories: ['Italian', 'pizzeria', 'vegetarian', 'organic'],
  starterMenu: ['focaccia', 'bruschatta', 'Garlic', 'Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours,
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '22:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be deliver to ${address} at ${time}`
    );
  },
};

const days = ['mon', 'tue', 'wed', 'thus', 'fri', 'sat', 'sun'];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  //const open = restaurant.openingHours[day]?.open || 'closed';
  console.log(`on ${day}, we open at ${open}`);
}

//methods
console.log(restaurant.order?.(0, 1) ?? 'method');
console.log(restaurant.orderfaster?.(0, 1) ?? 'method does not exist');

//Array
const users = [{ name: 'Adeola', age: 36 }];
console.log(users[0]?.name ?? 'user array empty');
console.log(users[0]?.email ?? 'user array empty');
//or
if (users.length > 0) console.log(users[0].name);
else console.log('uesr array empty');*/

//property Names

/*const weekdays = ['mon', 'tue', 'wed', 'thus', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  [weekdays[6]]: {
    open: 0,
    close: 24,
  },
  //[`day-${4}`]: {
  //open: 0,
  //close: 24,
  //},
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, italy',
  categories: ['Italian', 'pizzeria', 'vegetarian', 'organic'],
  starterMenu: ['focaccia', 'bruschatta', 'Garlic', 'Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours,
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '22:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be deliver to ${address} at ${time}`
    );
  },
};
//property names
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `we are open on ${properties.length} days:`;
for (const day of properties) {
  openStr += `${day},`;
}
console.log(openStr);

//property values
const value = Object.values(openingHours);
console.log(value);

//Entire object
const ent = Object.entries(openingHours);
console.log(ent);
for (const [day, { open, close }] of ent) {
  console.log(`On ${day} we open at ${open} and close at ${close}`);
}*/
