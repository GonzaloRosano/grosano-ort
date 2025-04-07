document.querySelector('#btnComprobar').addEventListener('click', comprobar)
function comprobar(){
    let numero = document.querySelector('#txtNumero').value
    if (numero > 20){
        alert(`${numero} es mayor que 20`)
    } else {
        alert(`${numero} es menor o igual a 20`)
    }
}