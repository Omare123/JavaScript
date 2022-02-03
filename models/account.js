import random from "../helpers/random.js"
import isValidNumber from "../helpers/isValidNumber.js"
import showError from "../helpers/showErrors.js"
export default class Account{
    constructor(){
        this.pesos = 100000
        this.dollars = 0
        this.bolivares = 0
    }
    buyDollars (amount) {
        let amountToPesos = amount*210
        if(this.pesos >= amountToPesos){
            let ruleta = random(10, 0);
            if(ruleta === 1){
                this.pesos -= amountToPesos
                this.bolivares += amount * 4.58 * 1000000
                return 2
            }
            else{
                this.pesos -= amountToPesos
                this.dollars += amount
                return 1
            }   
        }
        else return 0;
    }

    withdraw() {
        let withdraw = parseFloat(prompt("¿Cuánto dinero desea extraer?", 0))
        if(isValidNumber(withdraw)){
            if(withdraw <= this.pesos)
                this.pesos -= withdraw
            else
                showError("No hay suficiente dinero en tu cuenta")
        }
        else
            showError("Numero invalido")
        
    }
    
    deposit() {
        let deposit = parseFloat(prompt("¿Cuánto dinero desea depositar?", 0))
        if(isValidNumber(deposit))
            this.pesos = this.pesos + deposit
        else
            showError("Número invalido")
    }
}