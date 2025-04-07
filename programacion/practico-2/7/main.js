document.querySelector('#btnComprobar').addEventListener('click', comprobar)
function comprobar(){
    let numero = Number(document.querySelector('#txtNumero').value)
    if (numero < -20 || numero > 20){
        alert('CUMPLE')
    } else {
        alert('NO CUMPLE')
    }
}