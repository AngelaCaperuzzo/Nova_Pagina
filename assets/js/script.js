/* posso acessar por tag: getElementByTagName(), 
por id: getElementById(),
por nome: getElementByName(),
por classe: getElementByClassName(),
por seletor: queryselector(),
case sensitive = reconhece letras maíusculas e minúsculas. */

let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false

nome.style.width = '100%'
email.style.width = '100%'

function validaNome() {
let txtNome = document.querySelector('#txtNome')
    if(nome.value.length < 2) {
        txtNome.innerHTML = 'Nome inválido'
        txtNome.style.color = 'red'
    }else {
    txtNome.innerHTML = 'Nome válido'
    txtNome.style.color = 'blue'
    nomeOk = true
    }
}

function validaEmail(){
    let txtEmail = document.querySelector('#txtEmail')
    
    if(email.value.indexOf('@') ==-1 || email.value.indexOf('.com') ==-1){
        txtEmail.innerHTML = 'E-mail inválido'
        txtEmail.style.color = 'red'
    }else{
        txtEmail.innerHTML = 'E-mail válido'
        txtEmail.style.color = 'blue'
        emailOk = true
    }
}

function validaAssunto(){
    let txtAssunto = document.querySelector('#txtAssunto')
    if(assunto.value.length >=50){
        txtAssunto.innerHTML =' texto muito grande, compátivel somente até 100 caracteres.'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'
    }else{
        txtAssunto.style.display = 'none'
        assuntoOk = true
    }
}
function enviar (){
    if(nomeOk == true && emailOk == true && assuntoOk == true){
        alert ('Mensagem enviada com sucesso! :D')
    }else{
        alert ('Por favor preencha os campos corretamente, para que possa ser enviado.')
    }
}
