import {validator, validatorMaskify} from './validator.js';                     //recebe do validador

function numCard(){
    let numCard = document.getElementById('cardNumber').value;                           //recebe input do num cartao html
   console.log(numCard.length);
   if ( validator(numCard) == false){                                               //conecta c/ validator
       return false;
   }
   return numCard;
}        

function maskify(numcCard){                                                         // passa o numero;chama o maskify do validador; retorna valor escondido
    return validatorMaskify(numcCard);
}

function show(){                                                                            //mostrar/ esconder div de resposta e num do input
    let btFinal= document.getElementById("resposta");                                   
    if (btFinal.style.display === "none"){
        btFinal.style.display = "block";                                                    //mostrar div
        document.getElementById('cardNumber').value = '';                                   //esconder num
        //esconder.style.display = "none";
        //let numcCard = numcCard.this.value= " ";
       // document.getElementsById("cardNumber").value = ''; 
    }else{
        btFinal.style.display = "none";                                                     //esconder
    }
}

function output(event){ 
    let name = document.getElementById('name').value;                                       //pega nome // document.getElementById("name").textContent;   
    let numcCard = numCard();                                                               //pegar resultado do numero
    event.preventDefault();                                                             //para de recarregar page; n envia form
    if (document.getElementById("name").value == ""){                                      //n deixa campo nome vazio
        console.log(name);
        document.getElementById('name').focus();                                                //foca no input do nome
        return alert('Preencha o campo Nome corretamente.');
    }
    if (numcCard == false){                                                                 // caso numero invalido
        document.getElementById('cardNumber').focus();
        return alert(`Insira um número válido.`);  
    } 
     else{
        let number = maskify(numcCard);                                                             //caso valido resposta
        let resposta = document.getElementById('card');
        resposta.textContent= `Olá ${name} , o número de cartão inserido foi : ${number} .`;
        show();
        return false;
    }
    //alert(`Olá  ${name} confirme o número de seu cartão: ${number}.`);                     //alert confirmar
}
let enviar = document.getElementById('submit');                                     //botao
enviar.addEventListener('click',output);

    
    


// document.getElementById("card").innerHTML = numCard;    manda para o p vazio o numCard cripto

//manipular dom

//1234567890123456  -16n
//4083952015263 -13 ok
//6363680354415371 ok 16

