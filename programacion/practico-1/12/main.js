document.querySelector("#btnCalcular").addEventListener("click", calcularIMC);
function calcularIMC() {
  let peso = document.querySelector("#txtPeso").value;
  let altura = document.querySelector("#txtAltura").value;
  let imc = peso / (altura ** 2);
  document.querySelector("#spnResultado").innerHTML = imc.toFixed(2);
}