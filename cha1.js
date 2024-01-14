'use strict';

/*const game = {
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
  goal: function (starterIndex, mainIndex) {
    return [this.scored[starterIndex], this.score[mainIndex]];
  },
};

//console.log(goals);

//1.
const [player1, player2] = game.players;
console.log(player1, player2);

//2.
const [gk, ...fieldPlayer] = player1;
console.log(gk, fieldPlayer);

const [gk2, ...fieldPlayer2] = player2;
console.log(gk2, fieldPlayer2);
//3.
const allPlayers = [...player1, ...player2];
console.log(allPlayers);
//4.
const player1Final = [...player1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(player1Final);
//5.
const {
  odd: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);
//6.
const printGoals = function (...players) {
  console.log(`${players.length} goals were scored`);
};
//printGoals('Davis', 'Muller', 'Lewandwski', 'kimich');
printGoals(...game.scored);

team1 < team2 && console.log('team 1 is more likely to win');*/
