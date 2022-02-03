import toCapitalize from "../helpers/capitalize.js"
let firstName = document.getElementById("nombre");
let lastName = document.getElementById("apellido");
let error = document.getElementById("error");
document.getElementById("login").addEventListener("click", login)

function login(){
    error.innerText = ""
    if(firstName.value && lastName.value){
        localStorage.setItem('firstName', toCapitalize(firstName.value));
        localStorage.setItem('lastName', toCapitalize(lastName.value));
        window.location.replace("../index.html")
    }
    else{
        if(!firstName.value)
            error.innerText = "El nombre es un campo requerido"
        else
            error.innerText = "El apellido es un campo requerido"
    }
        
}