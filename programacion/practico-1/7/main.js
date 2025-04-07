document.querySelector('#btnResto').addEventListener('click', calcularResto)
function calcularResto(){
    let valorUno = Number(document.querySelector("#txtValorUno").value);
    let valorDos = Number(document.querySelector("#txtValorDos").value);
    const resultadoResto = document.querySelector("#spnResto");
    resultadoResto.innerText = valorUno % valorDos
}