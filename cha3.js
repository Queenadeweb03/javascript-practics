'use stcrit';

const gameEvent = new Map([
  [17, 'Goal'],
  [36, 'Substitution'],
  [47, 'Goal'],
  [61, 'Substitution'],
  [64, 'yellow card'],
  [69, 'Red card'],
  [70, 'Substitution'],
  [72, 'Substitution'],
  [76, 'Goal'],
  [80, 'Goal'],
  [92, 'yellow card'],
]);

const events = [...new Set(gameEvent.values())];
console.log(events);

console.log(gameEvent.delete(64));

console.log(`An event happened, on average, every ${90 / gameEvent.size} min`);

const times = [...gameEvent.keys()].pop();
console.log(times);
console.log(
  `An event happened, on average, every ${times / gameEvent.size} min`
);

for (const [min, event] of gameEvent) {
  const half = min <= 45 ? 'first' : 'second';
  console.log(`[${half} half] ${min}: ${event}`);
}
