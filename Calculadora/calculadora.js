var numeroUno = 0;
var numeroDos = 0;
var signito;
var haySigno = false;

function escribir(valor) {
    document.getElementById("texto").innerHTML = valor;
}

function borrar(esC) {
    escribir(0);
    if(esC){
        numeroUno = 0;
        numeroDos = 0;
        haySigno = false;
    }
}

function agregarNumero(numerito) {
    var numero = document.getElementById("texto").innerHTML;
    if (numero != 0) {
        escribir(numero + numerito);
    }else {
        escribir(numerito);
    }
}

function escribirSigno(signo){
    if (haySigno == false) {
        signito = signo;
        haySigno = true;
        numeroUno = document.getElementById("texto").innerHTML;
        borrar(false);
    }else {

        numeroDos = document.getElementById("texto").innerHTML;
        borrar(false);

        numeroUno = parseInt(numeroUno);
        numeroDos = parseInt(numeroDos);

        switch (signito) {
            case "+": document.getElementById("texto").innerHTML = numeroUno + numeroDos;
            break; 
            case "-": document.getElementById("texto").innerHTML = numeroUno - numeroDos;
            break; 
            case "*": document.getElementById("texto").innerHTML = numeroUno * numeroDos;
            break; 
            case "/": document.getElementById("texto").innerHTML = numeroUno / numeroDos;
            break; 
        }

        if (signo == "=") {
            numeroUno = 0;
            numeroDos = 0;
            signito = "";
            haySigno = false;
        } else {
            numeroUno = document.getElementById("texto").value;
            numeroDos = 0;
            signito = signo;
            haySigno = true;

        }
    }
}

