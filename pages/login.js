import toCapitalize from "../helpers/capitalize.js"
let firstName = document.getElementById("nombre");
let lastName = document.getElementById("apellido");
import showError from '../helpers/showErrors.js'
document.getElementById("login").addEventListener("click", login)

function login(){
    if(firstName.value && lastName.value){
        localStorage.setItem('firstName', toCapitalize(firstName.value));
        localStorage.setItem('lastName', toCapitalize(lastName.value));
        window.location.replace("../index.html")
    }
    else{
        if(!firstName.value){
            showError("El nombre es un campo requerido")
        }
        else
            showError("El apellido es un campo requerido")
    }
        
}