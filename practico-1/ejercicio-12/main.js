function obtenerElemento(id) {
  return document.querySelector(`#${id}`);
}

function addEventListenerToButton(id, callback) {
  document.querySelector(`#${id}`).addEventListener("click", callback);
}

function calcularIMC() {

  let peso = obtenerElemento("txtPeso").value;
  let altura = obtenerElemento("txtAltura").value;

  let imc = peso / (altura ** 2);

  obtenerElemento("spnResultado").innerHTML = imc.toFixed(2);

}

addEventListenerToButton("btnCalcular", calcularIMC);
