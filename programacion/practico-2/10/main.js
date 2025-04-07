// Se ingresa la temperatura y el día de la semana y la aplicación deberá mostrar la salida. A la salida se le incorporará para todos los casos la instrucción de levantarse:

// Levantarse
// Abrigarse Mucho
// Ir al trabajo

// Prestar atención a que las tres acciones no tienen vinculación entre sí. document.querySelector('#btnComprobar').addEventListener('click', comprobar)
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
 