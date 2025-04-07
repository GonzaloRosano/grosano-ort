document.querySelector("#btnComprobar").addEventListener("click", comprobar);
function comprobar() {
  let dia = Number(document.querySelector("#txtDia").value);
  let temperatura = Number(document.querySelector("#txtTemperatura").value);

  let firstResponse = "Abrigo moderado";
  let secoundResponse = "Ir a trabajar";

  if (temperatura < 10) {
    firstResponse = "Abrigarse mucho";
  } else if (temperatura > 20) {
    firstResponse = "Ponerse ropa comoda";
  }

  if (dia == 6) {
    secoundResponse = "Quedarse en casa, hoy no trabaja";
  }

  document.querySelector("#msgRespuesta"
  ).innerHTML = `
   <p>Levantarse</p>
   <p>${firstResponse}</p> 
   <p>${secoundResponse}</p>`;
}
