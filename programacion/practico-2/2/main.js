document.querySelector('#btnComprobar').addEventListener('click', comprobar)

function comprobar(){
    let numero = document.querySelector('#txtNumero').value
    if (numero > 10) alert('mayor que diez')
}