let order = document.querySelector('.order')
let submitbutton = document.querySelector('#form')
let divOrderName = document.querySelector('.orderName')
let divOrderEmail = document.querySelector('.orderEmail')
let divOrderContact = document.querySelector('.orderContact')
let divOrderAddress = document.querySelector('.orderAddress')
let divOrderObservacoes = document.querySelector('.orderObservacoes')
let divItemCoffe = document.querySelector('.itemCoffe')


function OrderSummary(cafe, quantidade, checkId){
    const p = document.createElement('p')
    p.innerText = `${cafe} - ${quantidade}`
    divItemCoffe.appendChild(p)
    document.querySelector(checkId).classList.add('visible')
}

function checkMensage(id, msn){
    const p = document.createElement('p')
    p.innerText = msn
    const div = document.querySelector(id)
    div.appendChild(p)
}

function validacaoEmail(email) {
    let usuario = email.substring(0, email.indexOf("@"));
    let dominio = email.substring(email.indexOf("@")+ 1, email.length);
    
    if ((usuario.length >=1) &&
        (dominio.length >=3) &&
        (usuario.search("@")==-1) &&
        (dominio.search("@")==-1) &&
        (usuario.search(" ")==-1) &&
        (dominio.search(" ")==-1) &&
        (dominio.search(".")!=-1) &&
        (dominio.indexOf(".") >=1)&&
        (dominio.lastIndexOf(".") < dominio.length - 1)) 
    {
        return true;    
    } else{
        return false;
    }
}

submitbutton.addEventListener('submit', (e) => {
    e.preventDefault();

    let name = document.querySelector('#name').value
    let email = document.querySelector('#email').value
    let contact = document.querySelector('#contact').value
    let address = document.querySelector('#address').value
    let observacoes = document.querySelector('#comentarios').value

    let haveChocolatto = document.querySelector('#chocollato').checked
    let haveCapuccino = document.querySelector('#capuccino').checked
    let haveEspresso = document.querySelector('#espresso').checked
    let haveLatte = document.querySelector('#latte').checked

    let quantityChocollato = document.querySelector('#quantityChocollato').value
    let quantityCapuccino = document.querySelector('#quantityCapuccino').value
    let quantityEspresso = document.querySelector('#quantityEspresso').value
    let quantityLatte = document.querySelector('#quantityLatte').value    
    
    divOrderName.innerText = name 
    divOrderEmail.innerText = email
    divOrderContact.innerText = contact
    divOrderAddress.innerText = address
    divOrderObservacoes.innerText = observacoes 

    let isVisibleResume = true
                   /* Required fields */
    if(name == ''){
        checkMensage('#checkName', 'Informe seu nome')
        isVisibleResume = false
    }    

    if(email == ''){
        checkMensage('#checkEmail', 'Informe seu email')
        isVisibleResume = false 
    }

    if(!validacaoEmail(email)){
        checkMensage('#checkEmail', 'Email inválido')
        isVisibleResume = false 
    }

    if(contact == ''){
        checkMensage('#checkContact', 'Informe seu telefone para contato') 
        isVisibleResume = false 
    }

    if(address == ''){
        checkMensage('#checkAddress', 'Informe seu Endereço de entrega')
        isVisibleResume = false  
    }


    function alertRequestSuccess (){
        alert("Seu pedido foi realizado com sucesso. Role a página para ver o resumo")
    }
    
    if (haveChocolatto && quantityChocollato > 0) {
        OrderSummary('Chocolatto', quantityChocollato, '#checkChocollato')        
    }    
    
    if (haveChocolatto && quantityChocollato == 0) {
        checkMensage('#checkChocollato', 'Informe a quantidade de Café de Chocolate')
        isVisibleResume = false  
    }  

    if (!haveChocolatto && quantityChocollato > 0) {
        checkMensage('#checkChocollato', 'Marque o Café')
        isVisibleResume = false  
    } 
    
      /*                Capuccino         */

    if (haveCapuccino && quantityCapuccino > 0) {
        OrderSummary('Cappucino Avelã', quantityCapuccino, '#checkCapuccino')
    }
    
    if (haveCapuccino && quantityCapuccino == 0) {
        checkMensage('#checkCapuccino', 'Informe a quantidade de Café de avelã')
        isVisibleResume = false  
    }  

    if (!haveCapuccino && quantityCapuccino > 0) {
        checkMensage('#checkCapuccino', 'Marque o Capuccino de avelã')
        isVisibleResume = false  
    }

    /*                Espresso         */

    if (haveEspresso && quantityEspresso > 0) {
        OrderSummary('Espresso', quantityEspresso, '#checkEspresso')
    }

    if (haveEspresso && quantityEspresso == 0) {
        checkMensage('#checkEspresso', 'Informe a quantidade de Café Espresso')
        isVisibleResume = false  
    }  

    if (!haveEspresso && quantityEspresso > 0) {
        checkMensage('#checkEspresso', 'Marque o Café Espresso')
        isVisibleResume = false  
    } 
      /*                Latte       */

    if (haveLatte && quantityLatte > 0) {
        OrderSummary('Latte', quantityLatte, '#checkLatte')   
    }

    if (haveLatte && quantityLatte == 0) {
        checkMensage('#checkLatte', 'Informe a quantidade de Café Latte')
        isVisibleResume = false  
    }  

    if (!haveLatte && quantityLatte > 0) {
        checkMensage('#checkLatte', 'Marque o Café Latte')
        isVisibleResume = false  
    } 

    if (isVisibleResume) {
        alertRequestSuccess ()
        order.classList.toggle('visible');
    }    
})




    