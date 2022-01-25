import {validator, validatorMaskify} from './validator.js';                     //recebe do validador



function numCard(){
    let numCard = document.getElementById('cardNumber').value;                           //recebe input do num cartao html
   console.log(numCard.length);
   if ( validator(numCard) == false){                                               //conecta c/ validator
       return false;
   }
   return numCard;
}        

function maskify(numCCard){                                                         // passa o numero;chama o maskify do validador; retorna valor escondido
    return validatorMaskify(numCCard);
}

function ola(Event){ 
    let name = document.getElementById('name').value;                                       //pega nome // document.getElementById("name").textContent;   
    let numCCard = numCard();                                                               //pegar resultado do numero
    if (numCCard == false){                                                                 // caso numero invalido
        alert(`Insira um número válido.`);   
        Event.preventDefault();                                                             //para de recarregar page; n envia form
        return false;
    }  
    let number = maskify(numCCard);                                                         //passa numero p maskify
    /*saida = (number) =>{
        let resposta = document.getElementById('card');
            resposta.textContent= `O cartão inserido foi : ${number} .`
    }*/
    alert(`Olá  ${name} confirme o número de seu cartão: ${number}.`);                     //alert confirmar
}
let confirmar = document.getElementById('formCartao');                                     //botao
confirmar.addEventListener('submit',ola);

// document.getElementById("card").innerHTML = numCard;    manda para o p vazio o numCard cripto

//manipular dom

//1234567890123456  -16
//4083952015263 -13 ok
//6363680354415371 ok

