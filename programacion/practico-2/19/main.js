document.querySelector("#btnAgregar").addEventListener("click", agregar);
document.querySelector("#btnReiniciar").addEventListener("click", reiniciar);
let numeros = [];
let suma = 0;
// ⭐⭐Ingresar cinco números. Indicar cuántos son múltiplos de 5, cuantos son mayores que 20 y cuantos cumplieron ambas condiciones en simultáneo.
// La solución deberá utilizar un único campo de texto y un único botón
function agregar() {
    let numero = document.querySelector("#txtNumeros").value;
    if (numero !== "") {
        numeros.push(numero);
        document.querySelector("#msgNumeros").innerHTML = numeros;
        console.log(numeros);
        suma = numeros.reduce((acumulado, actual) => acumulado + Number(actual), 0);
        if (numeros.length === 6) {
            document.querySelector("#btnAgregar").disabled = true;
            document.querySelector("#msgSuma").innerHTML = suma;
        }
    }
    document.querySelector("#txtNumeros").value = "";
    
}
function reiniciar() {
    numeros = [];
    document.querySelector("#msgNumeros").innerHTML = numeros;
    document.querySelector("#btnAgregar").disabled = false;
    document.querySelector("#msgSuma").innerHTML = "";
}
