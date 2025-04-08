document.querySelector("#btnAcumular").addEventListener("click", acumular);
document.querySelector("#btnTotal").addEventListener("click", total);
document.querySelector("#btnLimpiar").addEventListener("click", reiniciar);
let valorAcumulado = 0;
function acumular() {
  let valor = Number(document.querySelector("#txtValor").value);
  valorAcumulado += valor;
}
function total() {
  document.querySelector("#spnAcumulado").innerHTML = valorAcumulado;
}
function reiniciar() {
  valorAcumulado = 0;
  document.querySelector("#spnAcumulado").innerHTML = valorAcumulado;
}