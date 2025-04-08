document.querySelector("#btnCalcular").addEventListener("click", calcularResto);
function calcularResto(){
    let valorUno = Number(document.querySelector("#txtValorUno").value);
    let valorDos = Number(document.querySelector("#txtValorDos").value);
    let valorTres = Number(document.querySelector("#txtValorTres").value);
    const resultadoResto = document.querySelector("#msgResultado");
    resultadoResto.innerText = (valorUno + valorDos) - valorTres
}