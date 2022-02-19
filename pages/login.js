import toCapitalize from "../helpers/capitalize.js"
let mail = document.getElementById("mail");
let password = document.getElementById("password");
import showError from '../helpers/showErrors.js'
document.getElementById("login").addEventListener("click", login)
document.getElementById("help").addEventListener("click", showHelp)
let url = 'https://www.mecallapi.com/api/login'
$('#helpInfo').hide()
$('#loader').attr('style','display:none !important');

function login(){
    if(mail.value && password.value){
        let data = {
            "username": mail.value,
            "password": password.value
        }
        getData(url, data).then(response => {
            localStorage.setItem('firstName', toCapitalize(response.user.fname));
            localStorage.setItem('lastName', toCapitalize(response.user.lname));   
            window.location.replace("../index.html")  
            $('#loader').show()   
        }).catch(err => {
            showError("Alguno de los datos es invalido")
            $('#loader').attr('style','display:none !important'); 
        })
        
    }
    else{
        if(!mail.value){
            showError("El mail es un campo requerido")
        }
        else
            showError("La contraseña es un campo requerido")
    }
    
}

function showHelp(){
    $('#helpInfo').text("username = karn.yong@mecallapi.com password = mecallapi")
    $('#helpInfo').toggle()
}


function getData(ajaxurl, data) { 
    $('#loader').show()
    return $.ajax({
      url: ajaxurl,
      type: 'POST',
      data: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  };