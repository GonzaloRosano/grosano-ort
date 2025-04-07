function obtenerElemento(id) {
  return document.querySelector(`#${id}`);
}

function addEventListenerToButton(id, callback) {
  document.querySelector(`#${id}`).addEventListener("click", callback);
}

let valorAcumulado = 0;

function acumular() {
  let valor = Number(obtenerElemento("txtValor").value);
  valorAcumulado += valor;
  obtenerElemento("spnAcumulado").innerHTML = '';
}

function total() {
  obtenerElemento("spnAcumulado").innerHTML = valorAcumulado;
}

function reiniciar() {
  valorAcumulado = 0;
  obtenerElemento("spnAcumulado").innerHTML = valorAcumulado;
}

addEventListenerToButton("btnAcumular", acumular);
addEventListenerToButton("btnTotal", total);
addEventListenerToButton("btnLimpiar", reiniciar);

