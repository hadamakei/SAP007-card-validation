import validator from './validator.js';                     

function numCard() {
    let numCard = document.getElementById('cardNumber').value;                           
    
    if (!validator.isValid(numCard)) {                                               
        return;
    }
    return numCard;
}

function maskify(numcCard) {                                                         
    return validator.maskify(numcCard);
}

function show() {                                                                            
    let btFinal = document.getElementById("resposta");
    if (btFinal.style.display === "none") {
        btFinal.style.display = "block";                                                   
        document.getElementById('cardNumber').value = '';                                   
    } else {
        btFinal.style.display = "none";                                                    
    }
}

function output(event) {
    let name = document.getElementById('name').value;                                         
    let numcCard = numCard();                                                              
    event.preventDefault();                                                             
    if (name === "") {                                      
        
        document.getElementById('name').focus();                                                
        return alert('Preencha o campo Nome corretamente.');
    }
    if (!numcCard) {                                                                 
        document.getElementById('cardNumber').focus();
        return alert(`Insira um número válido.`);
    }
    else {
        let number = maskify(numcCard);                                                             
        let resposta = document.getElementById('card');
        resposta.textContent = `Olá ${name} , o número de cartão inserido foi : ${number} .`;
        show();
        return false;
    }
}
let enviar = document.getElementById('submit');                                     
enviar.addEventListener('click', output);



//1234567890123456  -16n
//4083952015263 -13 ok
//6363680354415371 ok 16

