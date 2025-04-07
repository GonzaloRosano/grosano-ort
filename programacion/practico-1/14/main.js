function obtenerElemento(id) {
  return document.querySelector(`#${id}`);
}

function addEventListenerToButton(id, callback) {
  document.querySelector(`#${id}`).addEventListener("click", callback);
}
let contador = 0;

function addToCounter() {
  contador+=3;
  obtenerElemento("spnContador").innerHTML = contador;

}

function reiniciar() {contador
  contador = 0;
  obtenerElemento("spnContador").innerHTML = contador;
}



addEventListenerToButton("btnAgregar", addToCounter);

addEventListenerToButton("btnLimpiar", reiniciar);

