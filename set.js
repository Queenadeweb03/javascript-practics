'use stcrit';
//SET
/*const orderSet = new Set(['pasta', 'pizza', 'pizza', 'risotto', 'pasta']);
console.log(orderSet);
console.log(orderSet.size);
console.log(new Set('Adeola'));
console.log(orderSet.has('pizza'));
console.log(orderSet.has('bread'));
orderSet.add('galic bread');
console.log(orderSet.delete('pizza'));
console.log(orderSet);

//example
const staff = ['waiter', 'chef', 'waiter', 'manager', 'chef', 'waiter'];
//const staffUnique = [new Set(staff)];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

console.log(
  new Set(['waiter', 'chef', 'waiter', 'manager', 'chef', 'waiter']).size
);*/

//MAP
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
//rest.set(2, 'Lisbon, Portugal');
console.log(rest); //or
console.log(rest.set(2, 'Lisbon, Portugal'));

rest
  .set('categories', ['Italian', 'pizzeria', 'vegetarian', 'organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'we are open')
  .set(false, 'we are close');

console.log(rest.get('name'));
console.log(rest.get('categories'));
console.log(rest.get(true));

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

//const time = 8;
//console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has(1));
rest.delete(2);
//rest.clear();

const arr = [1, 2];
rest.set(arr, 'test');
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);
console.log(rest.size);
console.log(rest.get(arr));

const question = new Map([
  ['question', 'what is the best programming language in the world?'],
  [1, 'C'],
  [2, 'java'],
  [3, 'javaScript'],
  ['correct', 3],
  [true, 'correct'],
  [false, 'try again'],
]);
console.log(question);

const weekdays = ['mon', 'tue', 'wed', 'thus', 'fri', 'sat', 'sun'];
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

console.log(Object.entries(openingHours));

//convert object to map
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

//QUIZ APP
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
//const answer = Number(prompt('Your answer'));
const answer = 3;
console.log(answer);
console.log(question.get(question.get('correct') === answer));

//convert map to array
console.log([...question]);
//console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);
