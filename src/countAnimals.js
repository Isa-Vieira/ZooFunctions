const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(Animais) {
  if (!Animais) {
    const especiesQuantidades = {};
    species.forEach((elemento) => {
      const population = elemento.residents.length;
      especiesQuantidades[elemento.name] = population;
    });
    return especiesQuantidades;
  }
  if (Animais.sex) {
    const object = species.find(
      (animal) => (animal.name === Animais.specie),
    );
    const Count = object.residents.filter(
      (animal) => (animal.sex === Animais.sex),
    ).length;
    return Count;
  }
  return species.find((param) => param.name === Animais.specie).residents.length;
}
console.log(countAnimals());
// O metodo find encontrou o objeto do parametro,residents acessou a chave do objeto
// e o length trouxe o número de elementos dentro do array de residents

// o forEach serviu para passar por cada posição e retornar
// todas as especies e a quantidade
// a cada iteração do forEach ele cria uma chave com o nome do animal
// e da o valor da quantidade dele ex: 5 leões
module.exports = countAnimals;
