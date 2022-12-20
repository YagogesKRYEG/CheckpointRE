let consertos = require("./consertos");

for (let i = 0; i < consertos.length; i++) {
    const conserto = consertos[i];
  
    if (typeof conserto.aparelho !== "string") {
      console.log("O aparelho deve ser uma string");
    }
  
    if (!Array.isArray(conserto.itensConsertados)) {
      console.log("Os itens consertados devem ser um array");
    }
  
    if (!Array.isArray(conserto.valores)) {
      console.log("Os valores devem ser um array");
    }
  
    if (typeof conserto.pronto !== "boolean") {
      console.log("O pronto deve ser um booleano");
    }
  }
