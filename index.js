let depositButton = document.getElementById("deposit")
let withdrawButton = document.getElementById("withdraw")
let accoutMoney = document.getElementById("money")
begin();

const isValid = (number) => !isNaN(number) && number >= 0
function begin() {
    accoutMoney.innerText = 1000
    withdrawButton.addEventListener("click", withdraw)
    depositButton.addEventListener("click", deposit)
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

