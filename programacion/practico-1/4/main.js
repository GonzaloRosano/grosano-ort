document.querySelector('#btnResultado').addEventListener('click', calcular,)
function calcular(){
    let valorUno = Number(document.querySelector('#txtValorUno').value)
    let valorDos = Number(document.querySelector('#txtValorDos').value)

    const msgSuma = document.querySelector('#msgSuma')
    const msgResultado = document.querySelector('#msgResultado')

    msgSuma.innerText = eval(valorUno + valorDos)
    msgResultado.innerText = eval(valorUno * valorDos)
}