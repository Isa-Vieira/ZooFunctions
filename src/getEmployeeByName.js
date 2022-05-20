const data = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  const names = employees
    .find((elemento) => elemento.firstName === employeeName || elemento.lastName === employeeName);
  return (names === undefined) ? {} : names;
}

module.exports = getEmployeeByName;
