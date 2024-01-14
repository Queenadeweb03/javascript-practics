const flights =
  '_Delayed_Departure;fao56372815;txl57844296;11:25+_Arrival;bru4876930275;fao46566789275634;11:45+_Delayed_Arrival;hel67642956432;fao56478208543;12:05+_Departure;fao575462389694;lis6748924463;12:30';
const getCode = str => str.slice(0, 3).toUpperCase();
for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🛑' : ''}${type.replaceAll(
    '_',
    ' '
    //)} ${from.slice(0, 3).toUpperCase()} ${to.slice(0, 3).toUpperCase()} (${time.replace(':', 'h')})`;
  )} ${getCode(from)} ${getCode(to)} (${time.replace(':', 'h')})`.padStart(36);
  console.log(output);
}
