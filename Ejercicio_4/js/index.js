
/** Variables calculadora */
var num1 = 0;
var num2 = 0;
var opera;

/** Introducir número en pantalla */
function darNumero(numero){
if(num1==0 && num1 !== '0.'){
    num1 = numero;
}else{
    num1 += numero;
}
refrescar();
}

/** Posicionar la coma entre numeros */
function darComa(){
if(num1 == 0) {
    num1 = '0.';
} else if(num1.indexOf('.') == -1) {
    num1 += '.';
}
refrescar();
}

/** Se reinicia la calculadora al presional la C */
function darC(){
num1 = 0;
num2 = 0;
refrescar();
}


/** Obtener el botón pulsado utilizando el identificador */
function operar(valor){
if (num1 == 0){
    num1 = parseFloat(document.getElementById("valor_numero").value);
}
num2 = parseFloat(num1);
num1= 0;
opera = valor;
}

/** Selector de operaciones */
function esIgual(){
num1 = parseFloat(num1);
switch (opera){
    case 1:
        num1 += num2;
    break;
    case 2:
        num1 = num2 - num1;
    break;
    case 3:
        num1 *= num2;
    break;
    case 4:
        num1 = num2 / num1;
    break;
    case 5:
        num1 = Math.pow(num2, num1);
    break;
}
refrescar();
num2 = parseFloat(num1);
num1 = 0;
}

function refrescar(){
document.getElementById("valor_numero").value = num1;
}
