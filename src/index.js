import validator from './validator.js';

console.log(validator);

function numCard(){
    let numCard = document.getElementById('cardNumber').value;
    document.getElementById('cardNumber').textContent = numCard;
   console.log(numCard);
   return numCard;
}                                                                   //pegar numero

/*
let card = document.getElementById('cardNumber').value;
document.getElementById('cardNumber').textContent = card;
console.log(card); */

function ola(){ 
    let name = document.getElementById('name').value;
    document.getElementById("name").textContent = 'Cliente: ' + name;           //alert confirmar
    let numCCard = numCard();
    let isValidCard = validator(numCCard);
    alert(`Olá  ${name} confirme número de seu cartão: ` + numCard());
  }
  let confirmar = document.getElementById('formCartao');     //botao
    confirmar.addEventListener('submit',ola);

// document.getElementById("card").innerHTML = numCard;    manda para o p vazio o numCard cripto

//manipular dom