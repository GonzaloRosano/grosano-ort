function calcularAreaDeCuadrado(){
    let valor = Number(document.querySelector('#txtLadoCuadrado').value)

    let areaCuadrado = eval(valor**2)

    const spnAreaCuadrado = document.querySelector('#spnAreaCuadrado')
    spnAreaCuadrado.innerText = areaCuadrado
}