document.querySelector("#btnAgregar").addEventListener("click", agregar);
document.querySelector("#btnReiniciar").addEventListener("click", reiniciar);
let numeros = [];
let suma = 0;
let contador
let numbers
function agregar() {
    let numero = Math.abs(document.querySelector("#txtNumeros").value);
    if (numero !== "") {
        numeros.push(numero);
        document.querySelector("#msgNumeros").innerHTML = numeros;
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
