document.querySelector("#btnSumaDeTres").addEventListener("click", calcularSumaDeTres);
function calcularSumaDeTres() {
    let valorUno = Number(document.querySelector("#txtValorUnoDeTres").value);
    let valorDos = Number(document.querySelector("#txtValorDosDeTres").value);
    let valorTres = Number(document.querySelector("#txtValorTresDeTres").value);
    const resultadoSumaDeTres = document.querySelector("#spnSumaDeTres");
  
    resultadoSumaDeTres.innerText = valorUno + valorDos + valorTres
  }
  