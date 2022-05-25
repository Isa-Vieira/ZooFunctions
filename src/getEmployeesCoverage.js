const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');
// Tive ajuda da Ana Laura, Lauro e Eliel
const { employees } = data;
function informacoes() {
  return employees.map((param1) => ({
    id: param1.id,
    fullName: `${param1.firstName} ${param1.lastName}`,
    species: param1.responsibleFor.map((param) => species
      .find((param2) => param2.id === param).name),
    locations: param1.responsibleFor.map((local) => species
      .find((param3) => param3.id === local).location),
  }));
}
function getEmployeesCoverage(returnobj) {
  if (!returnobj) { return informacoes(); }
  const testeobj = Object.values(returnobj)[0];
  const employees2 = data.employees.find((param2) =>
    param2.id === testeobj || param2.firstName === testeobj || param2.lastName === testeobj);
  if (!employees2) {
    throw new Error('Informações inválidas');
  }
  return {
    id: employees2.id,
    fullName: `${employees2.firstName} ${employees2.lastName}`,
    species: employees2.responsibleFor.map((param) => species
      .find((param2) => param2.id === param).name),
    locations: employees2.responsibleFor.map((local) => species
      .find((param3) => param3.id === local).location),
  };
}
module.exports = getEmployeesCoverage;
