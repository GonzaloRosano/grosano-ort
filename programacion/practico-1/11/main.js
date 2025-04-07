document.querySelector("#btnCalcular").addEventListener("click", calcularConIva);
function calcularConIva() {
  let importe = Number(document.querySelector("#txtValorUno").value);
  let resultado = importe * 1.22;
  document.querySelector("#spnResultado").innerHTML = resultado;
}