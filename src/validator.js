const validator = (numeCard) => {
  console.log('validador');
  console.log(numeCard);
  if (numeCard.length != 16){                                       //confere tamanho num
    return false;
}
  
  let tranforme = numeCard.split('');                                   // transforma valor input em array
  console.log(tranforme);
  tranforme.reverse();
  console.log(tranforme);                                               // inverte ordem do array

  let pares = [];
  let impares = []

  for(let i = 0; i < 16; i ++){                         //inicia contador do array
    console.log(i);
    if (tranforme[i] % 2 == 0) {                        //verifica par 
      console.log(tranforme[i]);
      let dobro = tranforme[i] * 2;                     //dobra valor do par
      console.log(dobro);
      if (dobro >= 10){                                   //confere se é maior q 10
        let duplo = String(dobro).split('');                   // separa os digitos  cast   
        console.log(duplo);                                         
        dobro = parseInt(duplo[0]) + parseInt(duplo[1]);          // soma os digitos e digitos vira array
        console.log(dobro);
      }
      pares.push(dobro);                                //guarda o dobro em novo array
      console.log(pares);
      
    }

  }


  return true;

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