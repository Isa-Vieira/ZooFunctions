const data = require('../data/zoo_data');

const { hours, species } = data;
// Tive ajuda da Ana Melo neste requisito <3
const arrayAnimais = species.map((item) => item.name);
// Passamos o texto (no caso a hora) necessario de acordo com o que for chamado,usamos o
// template literals para chamar cada horario expecifico que for passado no parametro
const officeHour = (objeto) => {
  if (objeto.open === 0) return 'CLOSED';
  return `Open from ${objeto.open}am until ${objeto.close}pm`;
};
// Usamoos o includes para verificar se existe ao menos um elemento do parametro que passamos
// Usamos o filter para filtrar os elementos da const e ir criando o caminho.
// Usamos o map para pegar um item expecifico
const exhibition = (elemento) => {
  if (elemento === 'Monday') return 'The zoo will be closed!';
  return species.filter((item) => item.availability.includes(elemento))
    .map((item) => item.name);
};
// Esse const passa as informações de officeHour e exhibition para dentro do objeto
const scheduleHouers = {
  Tuesday: { officeHour: officeHour(hours.Tuesday), exhibition: exhibition('Tuesday') },
  Wednesday: { officeHour: officeHour(hours.Wednesday), exhibition: exhibition('Wednesday') },
  Thursday: { officeHour: officeHour(hours.Thursday), exhibition: exhibition('Thursday') },
  Friday: { officeHour: officeHour(hours.Friday), exhibition: exhibition('Friday') },
  Saturday: { officeHour: officeHour(hours.Saturday), exhibition: exhibition('Saturday') },
  Sunday: { officeHour: officeHour(hours.Sunday), exhibition: exhibition('Sunday') },
  Monday: { officeHour: officeHour(hours.Monday), exhibition: exhibition('Monday') },
};
// Usamoos o includes para verificar se existe ao menos um elemento do parametro que passamos
// Usamos o find para percorrer o item.name e depois acessamos o parametro que queriamos o availability.
function getSchedule(scheduleTarget) {
  if (arrayAnimais.includes(scheduleTarget)) {
    return species.find((item) => item.name === scheduleTarget).availability;
  }
  if (Object.keys(hours).includes(scheduleTarget)) {
    return { [scheduleTarget]: scheduleHouers[scheduleTarget] };
  }
  return scheduleHouers;
}
// O object.keys usamos para acessar a const hours
// Retornamos o scheduleTarget dinamicamente colocando ele entre [],assim podemos passar por todos os dias da semana
module.exports = getSchedule;
