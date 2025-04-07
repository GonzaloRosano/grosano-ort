function obtenerElemento(id) {
  return document.querySelector(`#${id}`);
}

function addEventListenerToButton(id, callback) {
  document.querySelector(`#${id}`).addEventListener("click", callback);
}

function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}

function formatearNombre() {
  let nombre = obtenerElemento("txtNombre").value;
  let apellido = obtenerElemento("txtApellido").value;
  const nombreFormateado = obtenerElemento("spnFormatText");

  nombreFormateado.innerText = `${capitalize(apellido)}, ${capitalize(
    nombre
  )} `;
}

function calcularSuma() {
  let valorUno = Number(obtenerElemento("txtValorUno").value);
  let valorDos = Number(obtenerElemento("txtValorDos").value);
  const resultadoSuma = obtenerElemento("spnSuma");

  resultadoSuma.innerText = valorUno + valorDos;
}

function calcularSumaDeTres() {
  let valorUno = Number(obtenerElemento("txtValorUnoDeTres").value);
  let valorDos = Number(obtenerElemento("txtValorDosDeTres").value);
  let valorTres = Number(obtenerElemento("txtValorTresDeTres").value);
  const resultadoSumaDeTres = obtenerElemento("spnSumaDeTres");

  resultadoSumaDeTres.innerText = valorUno + valorDos + valorTres
}

function ejercicioCuatro(){
    let valorUno = Number(obtenerElemento('txtValorUnoEjercicioCuatro').value)
    let valorDos = Number(obtenerElemento('txtValorDosEjercicioCuatro').value)

    const parrafoSuma = obtenerElemento('parrafoSumaEjercicioCuatro')
    const parrafoMultiplicacion = obtenerElemento('parrafoMultiplicacionEjercicioCuatro')

    parrafoSuma.innerText = eval(valorUno + valorDos)
    parrafoMultiplicacion.innerText = eval(valorUno * valorDos)
}

function calcularAreaDeCuadrado(){
    let valor = Number(obtenerElemento('txtLadoCuadrado').value)

    let areaCuadrado = eval(valor**2)

    const spnAreaCuadrado = obtenerElemento('spnAreaCuadrado')
    spnAreaCuadrado.innerText = areaCuadrado
}

function calcularConversion(){
    const dinero = Number(obtenerElemento('txtValorEjercicioSeis').value)
    const cambio = Number(obtenerElemento('txtCambio').value)
    const spnResultadoConversion = obtenerElemento('spnConversion')

    spnResultadoConversion.innerText = (dinero / cambio).toFixed(2)
}


addEventListenerToButton("btnFormatText", formatearNombre);
addEventListenerToButton("btnSuma", calcularSuma);
addEventListenerToButton("btnSumaDeTres", calcularSumaDeTres);
addEventListenerToButton("btnObtenerResultadosEjercicioCuatro", ejercicioCuatro)
addEventListenerToButton("btnCalcularAreaCuadrado",calcularAreaDeCuadrado)
addEventListenerToButton("btnConversion",calcularConversion)

