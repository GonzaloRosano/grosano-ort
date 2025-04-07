document.querySelector("#btnLimpiar").addEventListener("click", reiniciar);
document.querySelector("#btnAgregar").addEventListener("click", addToCounter);
let contador = 0;
function addToCounter() {
  contador+=3;
  document.querySelector("#spnContador").innerHTML = contador;
}
function reiniciar() {contador
  contador = 0;
  document.querySelector("#spnContador").innerHTML = contador;
}