import Card from "./models/card.js"
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

const isValidNumber = (number) => !isNaN(number) && number >= 0
const cardsLimit = () => cards.length < 3
const goLogin = () => window.location.replace("./pages/login.html")

begin();
function begin() {
    accoutMoney.innerText = datos.dinero
    withdrawButton.addEventListener("click", withdraw)
    depositButton.addEventListener("click", deposit)
    logoutButton.addEventListener("click", logout)
    askName()
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
    let cardsDiv = document.getElementById("cards")
    cardsDiv.innerHTML = ''
    cards.forEach(card => {
        let cardExpiration = document.createElement("p").innerText = `desde ${card.emitionDate.getMonth() + 1}/${card.emitionDate.getFullYear()}    hasta ${card.expirationDate.getMonth() + 1}/${card.expirationDate.getFullYear()}`
        let tag = document.createElement("div")
        tag.innerHTML =
         `<p class="h3" id="cardNumber">${card.number}</p>
        <p>${cardExpiration}</p>
        <p>${card.name}</p>
        <button type="button" class="btn btn-dark w-100" id="${card.number}">pagar</button>`;
        tag.setAttribute("class","w-10 bg-warning p-2 mt-3 rounded");
        cardsDiv.appendChild(tag);
        var payButton = document.getElementById(card.number.toString());
        payButton.addEventListener("click", () => card.executePayment(accoutMoney))
    })
    
}

function setCard(){
    if(cardsLimit())
        createCard()
    else
        alert("Llegaste a tu límite de tarjetas")
}

function withdraw() {
    let withdraw = parseFloat(prompt("¿Cuánto dinero desea extraer?", 0))
    if(isValidNumber(withdraw)){
        if(withdraw <= accoutMoney.innerText)
            accoutMoney.innerText -= withdraw
        else
            alert("No hay suficiente dinero en tu cuenta")
    }
    else
        alert("Numero invalido")
    
}

function deposit() {
    let deposit = parseFloat(prompt("¿Cuánto dinero desea depositar?", 0))
    if(isValidNumber(deposit))
        accoutMoney.innerText = parseFloat(accoutMoney.innerText) + deposit
    else
        alert("Número invalido")
}

function logout() {
    localStorage.clear();
    goLogin()
}