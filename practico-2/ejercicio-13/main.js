document.querySelector('#btnComprobar').addEventListener('click', comprobar)

function comprobar() {
    let primero = document.querySelector('#txtPrimero').value
    let segundo = document.querySelector('#txtSegundo').value

    if (primero % segundo == 0) {
        document.querySelector('#msgRespuesta').innerHTML = `${primero} es multiplo de ${segundo}`
    } else {
        document.querySelector('#msgRespuesta').innerHTML = 'No es multiplo'        
    }
   
}