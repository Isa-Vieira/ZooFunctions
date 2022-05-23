const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Para o argumento count deve retornar o número 4', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('Retorna um array de nomes que possui o nome Jefferson', () => {
    const arrayAnimais = ['Ilana', 'Orval', 'Bea', 'Jefferson'];

    expect(handlerElephants('names')).toEqual(arrayAnimais);
  });
  it('Retorna um número próximo de 10.5', () => {
    expect(handlerElephants('averageAge')).toBe(10.5);
  });
});
it('Retorna uma string NW', () => {
  expect(handlerElephants('location')).toBe('NW');
});
it('Retorna um número igual ou maior a 5', () => {
  expect(handlerElephants('popularity')).toBe(5);
});
it('Retorna um array', () => {
  expect(handlerElephants('availability')).not.toEqual('Monday');
});
it('Retorna undefined', () => {
  expect(handlerElephants(undefined)).toBe(undefined);
});
it('Retorna uma string', () => {
  expect(handlerElephants({})).toBe('Parâmetro inválido, é necessário uma string');
});
it('Retorna null', () => {
  expect(handlerElephants('')).toBe(null);
});
