document.querySelector('#btnComprobar').addEventListener('click', comprobar)
function comprobar(){
    let numero = Number(document.querySelector('#txtNumero').value)
    if(numero % 7 == 0 && numero % 3 == 0){
        alert(`El numero ${numero} es multiplo de 7 y 3 simultaneamente`)
    } else {
        alert(`El numero ${numero} no es multiplo de 7 y 3 simultaneamente`)
    }
}