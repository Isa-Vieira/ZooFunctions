/* eslint-disable no-unreachable */
const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  return ids.reduce((elemento1, elemento2) => (elemento1.concat(species.find(
    (callback) => callback.id === elemento2,
  ))), []);
}

module.exports = getSpeciesByIds;
