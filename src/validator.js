/*import numCard from './index.js';
console.log(numCard); */



const validator = (numCCard)=>{
  console.log('validador');
  console.log(numCCard);
};

export default validator;

/*funcao validar numero cartao:

validator.isValid(creditCardNumber):
creditCardNumber é string do numero p/ verificar
retornar um bollean */

/*funcao esconder numero cartao:
validator.maskify(creditCardNumber)
creditCardNumber é string do numero 
retorna string c/ todos os num - 4 ultimos são substituidos por #
todos os 4 ultimos mesmo quando o tamanho da string é menor

*/