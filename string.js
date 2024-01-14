'use strict';

/*const airplane = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log('b737'[0]);

console.log(airplane.length);
console.log('b373'.length);

console.log(airplane.indexOf('r'));
console.log(airplane.lastIndexOf('r'));
console.log(airplane.indexOf('portugal'));

console.log(airplane.slice(4));
console.log(airplane.slice(4, 7));

console.log(airplane.slice(0, airplane.indexOf(' ')));
console.log(airplane.slice(airplane.lastIndexOf(' ')));
console.log(airplane.slice(airplane.lastIndexOf(' ') + 1));

console.log(airplane.slice(-2));
console.log(airplane.slice(1, -1));

const checkMiddleSeat = function (seat) {
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') {
    console.log('you got the middle seat');
  } else {
    console.log('you are luck');
  }
};

checkMiddleSeat('11B');
checkMiddleSeat('23c');
checkMiddleSeat('3E');*/

/*const passenger = 'aDEolA';
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);*/

/*const passenger = function (passg) {
  const passengerLower = passg.toLowerCase();
  const passengerCorrect = passg[0].toUpperCase() + passengerLower.slice(1);
  console.log(passengerCorrect);
  return 'Adeola';
};

passenger('aDEolA');

function email(logEmail) {
  const normalizedEmail = logEmail.toLowerCase().trim();
  const normalEmail = 'hello@adeola.eo';
  console.log(normalizedEmail);
  console.log(normalizedEmail === normalEmail);
  return logEmail;
}
email(' Hello@adeola.Eo \n');*/

//replacing
/*const price = '288,973£';
//const price = '#288,973';
const priceUS = price.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';

console.log(announcement.replaceAll('door', 'gate'));

//booleans
const plane = 'Airbus A320neo';
console.log(plane.includes('AIR'));
console.log(plane.includes('bus'));
console.log(plane.includes('A320'));

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the new airbus');
}*/

//practice exercise
/*const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are not allowed on board');
  } else {
    console.log('Welcome aboard!');
  }
};
checkBaggage('I have a laptop, food, books and pocket knife');
checkBaggage('cloth and foods');
checkBaggage('shoes and gun for protection');*/

//Split and join
console.log('a+very+nice+string'.split('+'));
console.log('Adeleke Adeola'.split(' '));

const [firstName, lastName] = 'Adeleke adeola'.split(' ');
const newName = ['Queen', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizedName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    //namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};
capitalizedName('adebayo mikail idowu');
capitalizedName('adebayo abdullahi adewale');

//padding
const message = 'Go to gate 23!';
console.log(message.padStart(20, '+').padEnd(30, '+'));
console.log('Haneefah'.padStart(20, '+').padEnd(30, '+'));

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};
console.log(maskCreditCard(3859275839921));
console.log(maskCreditCard('56749230648219534'));
console.log(maskCreditCard(35988924568782957));

//Repeat
const messages = 'Bad weather... All departure delayed... ';
console.log(messages.repeat(5));

const planeInLine = function (n) {
  console.log(`There are ${n} planes in line ${'✈'.repeat(n)}`);
};
planeInLine(5);
planeInLine(9);
