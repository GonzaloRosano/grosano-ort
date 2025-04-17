document.querySelector("#btnCalcular").addEventListener("click", calcular);
function calcular() {
  const noches = Number(document.querySelector("#txtNoches").value);
  const pago = document.querySelector("#txtPago").value;
  const costoPorNoche = 40;
  let nochesRegalo = 0;

  if (noches >= 3 && noches < 7) {
    nochesRegalo = 1;
  } else if (noches >= 7) {
    nochesRegalo = 2;
    if (pago === "t") {
      nochesRegalo = 3;
    }
  }

  const totalNoches = noches + nochesRegalo;
  const montoPagar = noches * costoPorNoche;

  document.querySelector("#msgNochesRegalo").textContent = nochesRegalo;
  document.querySelector("#msgTotalNoches").textContent = totalNoches;
  document.querySelector("#msgMontoPagar").textContent = `$${montoPagar}`;
}
