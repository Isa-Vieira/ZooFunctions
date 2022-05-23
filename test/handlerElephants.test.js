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
