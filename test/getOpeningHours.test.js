const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Retorna um objeto com os horários do zoologico', () => {
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
  it('Retorna a string The zoo is closed', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toBe('The zoo is closed');
  });
  it('Retorna a string The zoo is open', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toBe('The zoo is open');
  });
  it('Retorna a string The zoo is closed', () => {
    expect(getOpeningHours('Wednesday', '09:00-PM')).toBe('The zoo is closed');
  });
});
it('Retorna uma execução com uma mensagem1', () => {
  expect(() => getOpeningHours('Thu', '09:00-AM')).toThrow();
  try {
    getOpeningHours('Thu', '09:00-AM');
  } catch (error) {
    expect(error.message).toBe('The day must be valid. Example: Monday');
  }
});
it('Retorna uma execução com uma mensagem2', () => {
  expect(() => getOpeningHours('Friday', '09:00-ZM')).toThrow();
  try {
    getOpeningHours('Friday', '09:00-ZM');
  } catch (error) {
    expect(error.message).toBe('The abbreviation must be \'AM\' or \'PM\'');
  }
});
it('Lança uma execução com uma mensagem1', () => {
  expect(() => getOpeningHours('Saturday', 'C9:00-AM')).toThrow();
  try {
    getOpeningHours('Saturday', 'C9:00-AM');
  } catch (error) {
    expect(error.message).toBe('The hour should represent a number');
  }
});
it('Retorna uma execução com uma mensagem3', () => {
  expect(() => getOpeningHours('Sunday', '09:c0-AM')).toThrow();
  try {
    getOpeningHours('Sunday', '09:co-AM');
  } catch (error) {
    expect(error.message).toBe('The minutes should represent a number');
  }
});
it('Lança uma execução com uma mensagem2', () => {
  expect(() => getOpeningHours('Monday', '13:00-AM')).toThrow();
  try {
    getOpeningHours('Monday', '13:00-AM');
  } catch (error) {
    expect(error.message).toBe('The hour must be between 0 and 12');
  }
});
it('Lança uma execução com uma mensagem3', () => {
  expect(() => getOpeningHours('Tuesday', '09:60-AM')).toThrow();
  try {
    getOpeningHours('Tuesday', '09:60-AM');
  } catch (error) {
    expect(error.message).toBe('The minutes must be between 0 and 59');
  }
});
