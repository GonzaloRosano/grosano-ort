function obtenerElemento(id) {
  return document.querySelector(`#${id}`);
}

function addEventListenerToButton(id, callback) {
  document.querySelector(`#${id}`).addEventListener("click", callback);
}

function calcularConIva() {
  let importe = Number(obtenerElemento("txtValorUno").value);
  let resultado = importe * 1.22;
  obtenerElemento("spnResultado").innerHTML = resultado;

}

addEventListenerToButton("btnCalcular", calcularConIva);
