import toCapitalize from "./helpers/capitalize.js";
import Account from "./models/account.js";
import Card from "./models/card.js"
import showError from "./helpers/showErrors.js";
import isValidNumber from "./helpers/isValidNumber.js";
var datos = await fetch("./datos.json")
.then(response => {
   return response.json();
}).then(jsondata => jsondata);
let depositButton = document.getElementById("deposit")
let logoutButton = document.getElementById("logout")
let withdrawButton = document.getElementById("withdraw")
let accoutMoney = document.getElementById("money")
document.getElementById("cardButton").addEventListener("click", setCard)
let cards = []
let account = new Account();

const cardsLimit = () => cards.length < 3
const goLogin = () => window.location.replace("./pages/login.html")

begin();
function begin() {
    $("#dollars").click(buyDollars)
    withdrawButton.addEventListener("click", () =>{
        account.withdraw()
        showAccount()
    })
    depositButton.addEventListener("click", () => {
        account.deposit()
        showAccount()
    })
    logoutButton.addEventListener("click", logout)
    $('#errors').hide()
    askName()
    showAccount()
}
function buyDollars(){
    let amount = parseFloat(prompt("¿Cuánto dinero desea comprar?", 0))
    if(isValidNumber(amount)){
        let buy = account.buyDollars(amount)
        if(buy){
            if(buy === 2)
                changeError()
            else
                showAccount()
        }
        else
            showError("No tienes suficiente dinero para comprar")
    }
    else
        showError("Numero invalido")
}

function changeError(){
    showError("NO! Hubo un error y te cambiaron tu dinero por Bolivare Fuertes! Una moneda super devaluada y descontinuada")
    $("#moneyBackground").removeClass("bg-warning").addClass("bg-danger")
    showAccount()
}

function showAccount(){
    accoutMoney.innerText = "";
    for (var [key, value] of Object.entries(account)) {
        if(value > 0){
            let container = document.createElement("div")
            let name = document.createElement("span").innerText = `${toCapitalize(key)}: `
            let money = document.createElement("span").innerText = value
            container.classList = "display-3 text-white"
            container.append(name)
            container.append(money)
            accoutMoney.append(container)
        }
    }
}
function askName(){
    let firstName = localStorage.getItem('firstName');
    let lastName = localStorage.getItem('lastName');
    if(!firstName || !lastName)
        goLogin()
    else{
        datos.nombre = firstName
        datos.apellido = lastName
    }
}
function createCard(){
    let personalCard = new Card(datos.nombre, datos.apellido)
    cards.push(personalCard)
    sortCards()
    printCards()
}

function sortCards (){
    var n, i, k, aux;
    n = cards.length;
    for (k = 1; k < n; k++) {
        for (i = 0; i < (n - k); i++) {
            if (cards[i].number > cards[i + 1].number) {
                aux = cards[i];
                cards[i] = cards[i + 1];
                cards[i + 1] = aux;
            }
        }
    }
}

function printCards(){
    $('#cards').hide()
    $('#cards').empty()
    cards.forEach(card => {
        let cardExpiration = `desde ${card.emitionDate.getMonth() + 1}/${card.emitionDate.getFullYear()}    hasta ${card.expirationDate.getMonth() + 1}/${card.expirationDate.getFullYear()}`
        $('#cards').append(`<div class="w-10 bg-warning p-2 mt-3 rounded" id=${card.number}>
        <p class="h3">${card.number}</p>
        <p>${cardExpiration}</p>
        <p>${card.name}</p>
        <button type="button" class="btn btn-dark w-100" id="${card.number}-button">pagar</button>
        </div>`);
        
        let cardButton = document.getElementById(`${card.number.toString()}-button`)
        cardButton.addEventListener("click", () =>{
            account.pesos =  card.executePayment(account.pesos)
            showAccount()
        })
    })
    $('#cards').fadeIn()
}

function setCard(){
    if(cardsLimit())
        createCard()
    else
        showError("Llegaste a tu límite de tarjetas")
}

function logout() {
    localStorage.clear();
    goLogin()
}