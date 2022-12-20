const consertos = require('./consertos');


const filtroAparelhos = (consertos, aparelhosProntos) => {
    if (!consertos) {
      return 'Parametro consertos não encontrado';
    }
    if (!aparelhosProntos) {
      return 'Parametro aparelhos prontos não encontrado';
    }
    return consertos.filter((conserto) => conserto.aparelhosProntos === aparelhosProntos);
  };
  
  console.log(filtroAparelhos(consertos, 'aparelhosProntos'));
  
  const aparelhosProntos = consertos.filter((conserto) => conserto.pronto === true);
  module.exports = aparelhosProntos;