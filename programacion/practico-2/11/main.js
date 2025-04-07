document.querySelector('#btnCalcular').addEventListener('click', comprobar)

function comprobar() {
    let primero = Number(document.querySelector("#txtPrimero").value);
    let segundo = Number(document.querySelector("#txtSegundo").value);
    let operacion = document.querySelector("#slcOperacion").value;

    let resultado = 0;
    if (operacion == "S") {
        resultado = primero + segundo
    } else if (operacion == "R") {
        resultado = primero - segundo
    } else if (operacion == "M") {
        resultado = primero * segundo
    } else if (operacion == "D") {
        resultado = primero / segundo
    } 
    
    document.querySelector('#msgRespuesta').innerHTML = resultado

}