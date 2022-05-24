/* eslint-disable no-param-reassign */
const data = require('../data/zoo_data');

const { child: num3, adult: num2, senior: num1 } = data.prices;

function countEntrants(entrants) {
  return entrants.reduce((elemento1, elemento2) => {
    if (elemento2.age < 50 && elemento2.age >= 18) elemento1.adult += 1;
    if (elemento2.age < 18) elemento1.child += 1;
    if (elemento2.age >= 50) elemento1.senior += 1;
    return elemento1;
  }, { child: 0, adult: 0, senior: 0 });
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) { return 0; }
  const { child, adult, senior } = countEntrants(entrants);
  return (child * num3) + (adult * num2) + (senior * num1);
}
// refatorar
module.exports = { calculateEntry, countEntrants };
