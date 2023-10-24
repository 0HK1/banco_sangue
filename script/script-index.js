const form = document.getElementById("form");
const username = document.getElementById("username");
const cpf = document.getElementById("cpf");
const numero = document.getElementById("numero");
const tiposangue = document.getElementById("tipo-sangue")


form.addEventListener("submit", (Event)=> {
    Event.preventDefault();

    checkinputUsername();
    checkinputCpf();
    checkinputNumero();

})

function checkinputUsername(){
    const usernameValue = username.value;

    if(usernameValue === ""){
        errorInput(username, "Campo obrigatorio")
    }else{
        const formItem = username.parentElement;
        formItem.className = "form-content"
    }
}


function checkinputCpf(){
    const cpfValue = cpf.value;

    if(cpfValue === ""){
        errorInput(cpf, "Campo obrigatorio")
    }else{
        const formItem = cpf.parentElement;
        formItem.className = "form-content"
    }
}

function checkinputNumero(){
    const numeroValue = numero.value;

    if(numeroValue === ""){
        errorInput(numero, "Campo obrigatorio")
    }else{
        const formItem = numero.parentElement;
        formItem.className = "form-content"
    }
}

function errorInput(input, message){
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("a")
    textMessage.innerText = message;
    formItem.className = "form-content error"
}