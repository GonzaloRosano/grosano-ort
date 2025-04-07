document.querySelector("#btnComprobar").addEventListener("click", comprobar);
function comprobar() {
  let primero = Number(document.querySelector("#txtPrimero").value); 
  let segundo = Number(document.querySelector("#txtSegundo").value);
  let resultado; 
  if (primero > segundo) {
    resultado = primero - segundo
  } else {
    resultado = segundo - primero
  }
  document.querySelector('#msgRespuesta').innerHTML= resultado
}