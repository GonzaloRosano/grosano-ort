document.querySelector("#btnSuma").addEventListener("click", calcularSuma);
function calcularSuma() {
    let valorUno = Number(document.querySelector("#txtValorUno").value);
    let valorDos = Number(document.querySelector("#txtValorDos").value);
    const resultadoSuma = document.querySelector("#spnSuma");
  
    resultadoSuma.innerText = valorUno + valorDos;
  }