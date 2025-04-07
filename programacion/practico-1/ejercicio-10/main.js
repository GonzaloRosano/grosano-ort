function obtenerElemento(id) {
  return document.querySelector(`#${id}`);
}

function addEventListenerToButton(id, callback) {
  document.querySelector(`#${id}`).addEventListener("click", callback);
}

function calcularRecargo() {
  let importe = Number(obtenerElemento("txtValorUno").value);
  let porcentaje = Number(obtenerElemento("txtValorDos").value);
  let recargo = eval(importe + (importe * (porcentaje / 100)));
  obtenerElemento("spnCalcular").innerHTML = recargo;

}

addEventListenerToButton("btnCalcular", calcularRecargo);
