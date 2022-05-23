const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Retorna um objeto', () => {
    expect(getOpeningHours()).toEqual({
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    });
  });
  it('Retorna uma string', () => {
    expect(getOpeningHours('Tuesday e 09:00-AM')).toBe('The zoo is closed');
  });
  it('Retorna uma string', () => {
    expect(getOpeningHours('Wednesday e 09:00-PM')).toBe('The zoo is closed');
  });
});
