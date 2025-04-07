document.querySelector("#btnAgregar").addEventListener("click", addToCounter);
document.querySelector("#btnLimpiar").addEventListener("click", reiniciar);
let contador = 0;
function addToCounter() {
  contador++;
  document.querySelector("#spnContador").innerHTML = contador;
}  
function reiniciar() {contador
  contador = 0;
  document.querySelector("#spnContador").innerHTML = contador;
}  