document.querySelector("#btnCalcular").addEventListener("click", calcularPuntos);
function calcularPuntos(){
  let ganados = Number(document.querySelector("#txtGanados").value);
  let empatados = Number(document.querySelector("#txtEmpatados").value);
  let puntosTotales = eval((ganados*3) + empatados);
  document.querySelector("#spnPuntos").innerHTML = puntosTotales
}