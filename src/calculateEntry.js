const data = require('../data/zoo_data');

const { child: num3, adult: num2, senior: num1 } = data.prices;

function countEntrants(entrants) {
  return entrants.reduce((acc, elemento2) => {
    if (elemento2.age < 50 && elemento2.age >= 18) acc.adult += 1;
    if (elemento2.age < 18) acc.child += 1;
    if (elemento2.age >= 50) acc.senior += 1;
    return acc;
  }, { child: 0, adult: 0, senior: 0 });
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) { return 0; }
  const { child, adult, senior } = countEntrants(entrants);
  return (child * num3) + (adult * num2) + (senior * num1);
}
// refatorar
module.exports = { calculateEntry, countEntrants };
