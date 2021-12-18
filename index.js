let primeraVariable = prompt("Inserte un número", 0)
let segundaVariable = prompt("Inserte otro número", 0)
showMessage(primeraVariable, segundaVariable)

function showMessage(primeraVariable, segundaVariable){
    let parsedPrimera = parseFloat(primeraVariable);
    let parsedSegunda = parseFloat(segundaVariable);
    if(!isNaN(parsedPrimera) || !isNaN(parsedSegunda))
        alert(`Los números multiplicados son ${parsedPrimera*parsedSegunda}`)
    else
        alert(`Los datos ingresados no son válidos`)
}
