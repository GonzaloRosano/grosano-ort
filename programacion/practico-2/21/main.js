document.querySelector("#btnCalcular").addEventListener("click", calcular);
function calcular() {
  const ingresos = Number(document.querySelector("#txtIngresos").value);
  const costo = Number(document.querySelector("#txtCosto").value);
  let primerPago;
  let pagosParciales;
  let cantidadPagos;
  if (ingresos < 20000) {
    primerPago = costo * 0.15;
    cantidadPagos = 7 * 12;
    pagosParciales = (costo - primerPago) / cantidadPagos;
  } else {
    primerPago = costo * 0.3;
    cantidadPagos = 12;
    pagosParciales = (costo - primerPago) / cantidadPagos;
  }
  document.querySelector("#msgPrimerPago").innerHTML = `$${primerPago.toFixed(
    2
  )}`;
  document.querySelector(
    "#msgPagoParcial"
  ).innerHTML = `$${pagosParciales.toFixed(2)}`;
}
