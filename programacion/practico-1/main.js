function obtenerElemento(id) {
  return document.querySelector(`#${id}`);
}

function addEventListenerToButton(id, callback) {
  document.querySelector(`#${id}`).addEventListener("click", callback);
}












addEventListenerToButton("btnSuma", calcularSuma);
addEventListenerToButton("btnSumaDeTres", calcularSumaDeTres);
addEventListenerToButton("btnObtenerResultadosEjercicioCuatro", ejercicioCuatro)
addEventListenerToButton("btnCalcularAreaCuadrado",calcularAreaDeCuadrado)
addEventListenerToButton("btnConversion",calcularConversion)

