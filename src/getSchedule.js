const data = require('../data/zoo_data');

const { hours, species } = data;

const arrayAnimais = species.map((item) => item.name);

const officeHour = (objeto) => {
  if (objeto.open === 0) return 'CLOSED';
  return `Open from ${objeto.open}am until ${objeto.close}pm`;
};

const exhibition = (elemento) => {
  if (elemento === 'Monday') return 'The zoo will be closed!';
  return species.filter((item) => item.availability.includes(elemento))
    .map((item) => item.name);
};

const scheduleHouers = {
  Tuesday: { officeHour: officeHour(hours.Tuesday), exhibition: exhibition('Tuesday') },
  Wednesday: { officeHour: officeHour(hours.Wednesday), exhibition: exhibition('Wednesday') },
  Thursday: { officeHour: officeHour(hours.Thursday), exhibition: exhibition('Thursday') },
  Friday: { officeHour: officeHour(hours.Friday), exhibition: exhibition('Friday') },
  Saturday: { officeHour: officeHour(hours.Saturday), exhibition: exhibition('Saturday') },
  Sunday: { officeHour: officeHour(hours.Sunday), exhibition: exhibition('Sunday') },
  Monday: { officeHour: officeHour(hours.Monday), exhibition: exhibition('Monday') },
};

function getSchedule(scheduleTarget) {
  if (arrayAnimais.includes(scheduleTarget)) {
    return species.find((item) => item.name === scheduleTarget).availability;
  }
  if (Object.keys(hours).includes(scheduleTarget)) {
    return { [scheduleTarget]: scheduleHouers[scheduleTarget] };
  }
  return scheduleHouers;
}

module.exports = getSchedule;
