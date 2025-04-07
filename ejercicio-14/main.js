document.querySelector("#btnComprobar").addEventListener("click", comprobar);

function comprobar() {
  let millas = Number(document.querySelector("#txtMillas").value);
  let plan = document.querySelector("#txtPlan").value;

  let valorMillas = millas;
  if (plan == "s") valorMillas = millas * 2;

  if (valorMillas >= 60000) {
    document.querySelector("#msgRespuesta").innerHTML =
      "Puede viajar a Europa, America del Norte y America del Sur de forma gratuita";
  } else if (valorMillas >= 30000) {
    document.querySelector("#msgRespuesta").innerHTML =
      "Puede viajar a America del Norte y America del Sur de forma gratuita";
  } else if (valorMillas >= 15000) {
    document.querySelector("#msgRespuesta").innerHTML =
      "Puede viajar a America del Sur de forma gratuita";
  } else {
    document.querySelector("#msgRespuesta").innerHTML =
      "No dispone de millas suficientes para viajar de forma gratuita";
  }
}
