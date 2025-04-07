document.querySelector('#btnComprobar').addEventListener('click', comprobar)
function comprobar(){
    let numero = Number(document.querySelector('#txtNumero').value)
    if(numero > 10 && numero < 20){
        alert(`El numero ${numero} es mayor que 10 y menor que 20 `)
    } else {
        alert(`El numero ${numero} no es mayor que 10 y menor que 20 `)
    }
}