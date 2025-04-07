document.querySelector("#btnCalcular").addEventListener("click", calcular);
function calcular() {
  let valorUno = Number(document.querySelector("#txtValorUno").value);
  let valorDos = Number(document.querySelector("#txtValorDos").value);
  let valorTres = Number(document.querySelector("#txtValorTres").value);
  const resultadoResto = document.querySelector("#spnCalcular");
  let resultado = eval(valorUno ** 2 - (valorDos + valorTres));
  console.log("Valor uno" + valorUno);
  console.log("Valor dos" + valorDos);
  console.log("Valor tres" + valorTres);
  resultadoResto.innerText = resultado;
}