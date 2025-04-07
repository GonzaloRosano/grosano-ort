document.querySelector("#btnComprobar").addEventListener("click", comprobar);
function comprobar() {
  let numero = Number(document.querySelector("#txtNumero").value);
  let resultado = document.querySelector("#msgResultado");
  if (numero < 0) {numero= numero * -1;}
  resultado.innerHTML = numero;
}
