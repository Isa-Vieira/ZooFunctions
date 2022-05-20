const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  return species.find((element) => element.name === animal)
    .residents.every((element) => element.age >= age);
}

module.exports = getAnimalsOlderThan;
