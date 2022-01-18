import validator from './validator.js';

console.log(validator);

function numCard(){
    let card = document.getElementById('cardNumber').value;
    document.getElementById('cardNumber').textContent = card;
   console.log(numCard);
    return numCard = card;
    
}

// ? parseInt

function ola(){
    let name = document.getElementById('name').value;
    document.getElementById("name").textContent = 'Cliente: ' + name; 
    alert('Olá ' + name + ' confirme número de seu cartão:' + numCard);
  }
  let confirmar = document.getElementById('submit');
    confirmar.addEventListener('click',ola);

//manipular dom