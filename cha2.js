'use stcrit';

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmurd',
  players: [
    [
      'Never',
      'pavard',
      'Martin',
      'Alaba',
      'Davis',
      'kimich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lowrence',
    ],
    [
      'Bueki',
      'Schulz',
      'Hummel',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4.0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummel'],
  date: 'Nov 9th, 2037',
  odd: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//1.
const goals = game.scored;
console.log(goals);
let eachGoal = `Goal 1: ${goals[0]}, Goal 1: ${goals[1]}, Goal 1: ${goals[2]}, Goal 1: ${goals[3]},`;
console.log(eachGoal);

//or
for (const [i, play] of game.scored.entries())
  console.log(`Goal ${i + 1}: ${play}`);
//2.

let odds = Object.values(game.odd);
console.log(odds);

let aveOdd = 0;
for (const ava of odds) aveOdd += ava;
aveOdd /= odds.length;

console.log(aveOdd);

//3.
for (const [team, odd] of Object.entries(game.odd)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`odd of ${teamStr} ${odd}`);
}
