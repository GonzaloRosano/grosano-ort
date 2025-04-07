document.querySelector('#btnComprobar').addEventListener('click', comprobar)
function comprobar(){
    let numero = Number(document.querySelector('#txtNumero').value)
    if (numero > 30){
        alert('es mayor que treinta')
    } else if(numero < 10) {
        alert('menor que 10')
    } else {
        alert('Entre diez y treinta')
    }
}