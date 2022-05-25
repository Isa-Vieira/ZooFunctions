const data = require('../data/zoo_data');

const { employees, species } = data;

function getOldestFromFirstSpecies(id) {
  const idAnimal = employees.find((person) => person.id === id).responsibleFor[0];
  return Object.values(species.find((animal) => animal.id === idAnimal).residents
    .reduce((param1, param2) => {
      if (param1.age > param2.age) {
        return param1;
      }
      return param2;
    }));
}
module.exports = getOldestFromFirstSpecies;
