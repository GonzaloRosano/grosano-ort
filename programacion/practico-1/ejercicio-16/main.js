function obtenerElemento(id) {
  return document.querySelector(`#${id}`);
}

function addEventListenerToButton(id, callback) {
  document.querySelector(`#${id}`).addEventListener("click", callback);
}


function calcularPuntos(){
  let ganados = Number(obtenerElemento("txtGanados").value);
  let empatados = Number(obtenerElemento("txtEmpatados").value);
  let puntosTotales = eval((ganados*3) + empatados);

  obtenerElemento("spnPuntos").innerHTML = puntosTotales


}



addEventListenerToButton("btnCalcular", calcularPuntos);

