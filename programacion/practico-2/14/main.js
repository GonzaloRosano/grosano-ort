document.querySelector("#btnComprobar").addEventListener("click", comprobar);
function comprobar() {
  const millas = Number(document.querySelector("#txtMillas").value);
  const plan = document.querySelector("#txtPlan").value;
  const valorMillas = plan === "s" ? millas * 2 : millas;
  const msgRespuesta = document.querySelector("#msgRespuesta");
  if (valorMillas >= 60000) {
    msgRespuesta.innerHTML = "Puede viajar a Europa, America del Norte y America del Sur de forma gratuita";
  } else if (valorMillas >= 30000) {
    msgRespuesta.innerHTML = "Puede viajar a America del Norte y America del Sur de forma gratuita";
  } else if (valorMillas >= 15000) {
    msgRespuesta.innerHTML = "Puede viajar a America del Sur de forma gratuita";
  } else {
    msgRespuesta.innerHTML = "No dispone de millas suficientes para viajar de forma gratuita";
  }
}

