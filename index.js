let number = prompt("Inserte un número", 0);
isPrime(number) ? alert(`${number} es primo`) : alert(`${number} no es primo`);

function isPrime(num) {
    let parsedNum = parseFloat(num);
    if(!isNaN(parsedNum)){
        for(var i = 2; i < num; i++)
            if(num % i === 0) return false;
        return true;
    }
}
