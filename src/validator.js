const validator = {                                                                 

  soma(cardArray) {                                                                
    let total = cardArray.reduce(function (primeiro, segundo) { return primeiro + segundo; }, 0);
    
    if (total % 10 != 0) {
      return;
    } else {
      return true;
    }
  },

  isValid(numeCard) {                             
    
    if (numeCard.length < 11) {                                      
      return false;
    }

    let transforme = numeCard.split('');                                  
    
    transforme.reverse();

    transforme = transforme.map((numero, indice) => {                       
      if (indice % 2 != 0) {                                                 
        numero = numero * 2                                                     
        
        if (numero >= 10) {                                                   
          let duplo = String(numero).split('');                     
                                                
          numero = parseInt(duplo[0]) + parseInt(duplo[1]);          
          
        }
      }
      return parseInt(numero);                                      
    })
    return this.soma(transforme);                                      

  },

  maskify(numCard) {                              
    
    let maskify = [];                                                   
    for (let i = 0; i < numCard.length; i++) {                           
      if (i < numCard.length - 4) {                                       
        maskify.push("#");                                              
      } else {
        maskify.push(numCard[i])                                     
      }
    }
    return maskify.join("");                                            
  }
}

export default validator;                     