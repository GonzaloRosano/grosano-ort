function obtenerElemento(id) {
  return document.querySelector(`#${id}`);
}

function addEventListenerToButton(id, callback) {
  document.querySelector(`#${id}`).addEventListener("click", callback);
}


function calcularResto(){
    let valorUno = Number(obtenerElemento("txtValorUno").value);
    let valorDos = Number(obtenerElemento("txtValorDos").value);
    const resultadoResto = obtenerElemento("spnResto");

    resultadoResto.innerText = valorUno % valorDos

}

addEventListenerToButton("btnResto", calcularResto);

