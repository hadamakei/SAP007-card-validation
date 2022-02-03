/* versao 1
function soma (pares, impares){
  let total = pares.reduce(function(primeiro,segundo){return primeiro + segundo;}, 0) +     //soma array dos pares
    impares.reduce(function(primeiro, segundo){return primeiro + segundo;}, 0);           // somar array dos impares e o total dos 2 
  console.log(total);
  if (total % 10 == 0){                                                               // verifica total modulo 10 
    return true;
  }else{
    return false;
  }
}*/
const validator = {                                                                 //vira objeto

  soma(cardArray) {                                                                //recebe transforme, mudei nome
    let total = cardArray.reduce(function (primeiro, segundo) { return primeiro + segundo; }, 0);
    //console.log(total);
    if (total % 10 != 0) {
      return false;
    } else {
      return true;
    }
  },

  isValid(numeCard) {                             //recebe numero 
    //console.log('validador');
    // console.log(numeCard);
    if (numeCard.length < 11) {                                       //confere tamanho num
      return false;
    }

    let transforme = numeCard.split('');                                  // transforma valor input em array
    //console.log(transforme);
    transforme.reverse();
    // console.log(transforme);                                               // inverte ordem do array

    /*let pares = [];
    let impares = []*/

    transforme = transforme.map((numero, indice) => {                       //percorre array, pega valor e o indice
      if (indice % 2 != 0) {                                                 // verifica se indice é par
        numero = numero * 2                                                   // dobra valor do indice par    
        // console.log(numero);
        if (numero >= 10) {                                                   //verifica se dobro >10
          let duplo = String(numero).split('');                   // transforma o dobro  em string p usar split; separa os digitos cast   
          //   console.log(numero);                                         
          numero = parseInt(duplo[0]) + parseInt(duplo[1]);          //  digitos vira numero array e soma os digitos
          //   console.log(numero);
        }
      }
      return parseInt(numero);                                      //volta resultado p transforme
    })
    return this.soma(transforme);                                      //passa os num do array do transforme p/ a soma

    /* versao 1
    for(let i = 0; i < 16; i++){                         //inicia contador do array
      transforme[i] = parseInt(transforme[i]);                //transforma em inteiro
      console.log(i);
      if (i % 2 != 0) {                        //verifica posicao par 
        console.log(transforme[i]);
        let dobro = transforme[i] * 2;                     //dobra valor do par
        console.log(dobro);
        if (dobro >= 10){                                   //confere se dobro é maior q 10
          let duplo = String(dobro).split('');                   // transforma em string p usar split; separa os digitos cast   
          console.log(duplo);                                         
          dobro = parseInt(duplo[0]) + parseInt(duplo[1]);          //  digitos vira numero array e soma os digitos
          console.log(dobro);
        }
        pares.push(dobro);                                //guarda o dobro em novo array
        console.log(pares);
    
      }else {                                       //caso impar
        impares.push(transforme[i]);                         //guarda impar em novo array
        console.log(impares);
      }
    }
    return soma(pares,impares);*/

  },

  maskify(numCard) {                               //recebe numero string
    //console.log(numCard);
    let maskify = [];                                                   //cria array
    for (let i = 0; i < numCard.length; i++) {                           //percorre o numero de 1 em 1
      // console.log(numCard.length)
      if (i < numCard.length - 4) {                                       // exclui 4 ultimos
        maskify.push("#");                                              //add icone no lugar dos numeros no array
      } else {
        maskify.push(numCard[i])                                      //add numeros finais no array
      }
    }
    return maskify.join("");                                            //junta os num do array num string
  }
}

export default validator;                     //manda pro index

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