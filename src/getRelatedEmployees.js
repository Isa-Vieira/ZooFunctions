const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  return employees.some((elemento) => elemento.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === true) {
    const filtrar = employees.filter((elemento) => elemento.managers.includes(managerId));
    const filtraAndReduce = filtrar.reduce(
      (elemento1, elemento2) => elemento1.concat(
        (`${elemento2.firstName} ${elemento2.lastName}`),
      ), [],
    );
    return filtraAndReduce;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}
module.exports = { isManager, getRelatedEmployees };
