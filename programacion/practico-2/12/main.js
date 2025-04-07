document.querySelector('#btnComprobar').addEventListener('click', comprobar)
function comprobar() {
    let letra = document.querySelector('#txtLetra').value

    if ('aAeEiIoOuU'.includes(letra)) {
        document.querySelector('#msgRespuesta').innerHTML = 'Es una vocal'
    } else {
        document.querySelector('#msgRespuesta').innerHTML = 'No es una vocal'
    }
}