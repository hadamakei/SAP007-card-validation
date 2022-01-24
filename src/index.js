import validator from './validator.js';


function numCard(){
    let numCard = document.getElementById('cardNumber').value;                           //recebe input do num cartao html
   console.log(numCard.length);
   if ( validator(numCard) == false){                                               //conecta c/ validator
       return false;
   }
   return numCard;
}                                                                   

//1234567890123456  -16
//4083952015263 -13 ok
//6363680354415371 ok

function ola(Event){ 
    let name = document.getElementById('name').value;                                       //pega nome
    let numCCard = numCard();                                                               //pegar resultado do numero
    if (numCCard == false){                                                                 // caso numero invalido
        alert(`Insira um número válido.`);   
        Event.preventDefault();                                                             //para de recarregar page; n envia form
        return false;
    }
    
   // document.getElementById("name").textContent = 'Cliente: ' + name;                 //alert confirmar
    
    alert(`Olá  ${name} confirme o número de seu cartão: ${numCCard}.`);
  }
 let confirmar = document.getElementById('formCartao');                                     //botao
    confirmar.addEventListener('submit',ola);

// document.getElementById("card").innerHTML = numCard;    manda para o p vazio o numCard cripto

//manipular dom