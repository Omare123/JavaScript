export default class Card{
    constructor(name, lastname){
        this.name = `${name} ${lastname}`
        this.number = "4832 6687 3457 " + Math.floor(Math.random() * (9999 - 999 + 1) + 999).toString()
        this.emitionDate = new Date();
        this.expirationDate = this.getExpirationDate(this.emitionDate)
    }
    getExpirationDate (emitionDate) {
        let response = new Date(emitionDate)
        response.setFullYear(response.getFullYear() + 6)
        return response
    }
    executePayment (accoutMoney){
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