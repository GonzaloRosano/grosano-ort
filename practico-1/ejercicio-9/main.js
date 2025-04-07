function obtenerElemento(id) {
  return document.querySelector(`#${id}`);
}

function addEventListenerToButton(id, callback) {
  document.querySelector(`#${id}`).addEventListener("click", callback);
}

function calcular() {
  let valorUno = Number(obtenerElemento("txtValorUno").value);
  let valorDos = Number(obtenerElemento("txtValorDos").value);
  let valorTres = Number(obtenerElemento("txtValorTres").value);
  const resultadoResto = obtenerElemento("spnCalcular");

  let resultado = eval(valorUno ** 2 - (valorDos + valorTres));

  console.log("Valor uno" + valorUno);
  console.log("Valor dos" + valorDos);
  console.log("Valor tres" + valorTres);

  resultadoResto.innerText = resultado;
}

addEventListenerToButton("btnCalcular", calcular);
