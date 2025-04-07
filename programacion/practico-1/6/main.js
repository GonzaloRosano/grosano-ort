document.querySelector('#btnConversion').addEventListener('click',calcularConversion)
function calcularConversion(){
    const dinero = Number(document.querySelector('#txtValorEjercicioSeis').value)
    const cambio = Number(document.querySelector('#txtCambio').value)
    const spnResultadoConversion = document.querySelector('#spnConversion')

    spnResultadoConversion.innerText = (dinero / cambio).toFixed(2)
}