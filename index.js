let depositButton = document.getElementById("deposit")
let withdrawButton = document.getElementById("withdraw")
let accoutMoney = document.getElementById("money")
let card = document.getElementById("card")
const username = `${prompt("¿Cuál es su nombre?")} ${prompt("¿Cuál es su apellido?")}`
let personalCard ;


class Card {
    constructor(name){
        this.name = name
        this.number = "4832 6687 3457 " + Math.floor(Math.random() * (9999 - 999 + 1) + 999).toString()
        this.emitionDate = new Date();
        this.expirationDate = this.getExpirationDate(this.emitionDate)
    }
    getExpirationDate (emitionDate) {
        let response = new Date(emitionDate)
        response.setFullYear(response.getFullYear() + 6)
        return response
    }
    executePayment (){
        let amount = parseFloat(prompt("¿Cuánto dinero desea pagar?", 0))
        if(!isNaN(amount) && amount >= 0){
            if(amount <= accoutMoney.innerText)
                accoutMoney.innerText -= amount
            else
                alert("No hay suficiente dinero en tu cuenta")
        }
        else
            alert("Numero invalido")
    }
}

begin();


const isValid = (number) => !isNaN(number) && number >= 0
function begin() {
    accoutMoney.innerText = 1000
    withdrawButton.addEventListener("click", withdraw)
    depositButton.addEventListener("click", deposit)
    this.personalCard = new Card(username)
    this.setCard()
}
function setCard(){
    let name = document.getElementById("cardName");
    let number = document.getElementById("cardNumber");
    let expiration = document.getElementById("cardExp");
    let payButton = document.getElementById("pay"); 
    name.innerText = this.personalCard.name;
    number.innerText = this.personalCard.number;
    expiration.innerText = `desde ${this.personalCard.emitionDate.getMonth() + 1}/${this.personalCard.emitionDate.getFullYear()}    hasta ${this.personalCard.expirationDate.getMonth() + 1}/${this.personalCard.expirationDate.getFullYear()}`
    payButton.addEventListener("click", this.personalCard.executePayment)
}

function withdraw() {
    let withdraw = parseFloat(prompt("¿Cuánto dinero desea extraer?", 0))
    if(isValid(withdraw)){
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
    if(isValid(deposit))
        accoutMoney.innerText = parseFloat(accoutMoney.innerText) + deposit
    else
        alert("Número invalido")
}

