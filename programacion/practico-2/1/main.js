document.querySelector('#btnComprobar').addEventListener('click', comprobar)
function comprobar(){
    let txtNumero = document.querySelector('#txtNumero').value
    let msgResultado = document.querySelector('#msgResultado')
    if (txtNumero >= 0){
        msgResultado.innerHTML = 'El número es positivo'
    } else {
        msgResultado.innerHTML = 'El número es negativo'
    }
}