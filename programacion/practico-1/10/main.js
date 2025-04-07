document.querySelector("#btnCalcular").addEventListener("click", calcularRecargo);
function calcularRecargo() {
  let importe = Number(document.querySelector("#txtValorUno").value);
  let porcentaje = Number(document.querySelector("#txtValorDos").value);
  let recargo = eval(importe + (importe * (porcentaje / 100)));
  document.querySelector("#spnCalcular").innerHTML = recargo;
}