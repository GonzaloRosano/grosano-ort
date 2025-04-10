document.querySelector("#btnAdivinar").addEventListener("click", adivinar);

let numSecreto = (Math.random() * 100 + 1) | 0;
let intentos = 0;

console.log(numSecreto);
function adivinar() {
  let numero = Number(document.querySelector("#txtNumero").value);
  let msgIntentos = document.querySelector("#msgIntentos");
  intentos++;
  if (numero == numSecreto) {
    msgIntentos.innerHTML = intentos;
    document.querySelector("#msgResultado").innerHTML = "Has adivinado";
    document.querySelector("#btnAdivinar").disabled = true;
  } else if (numero > numSecreto) {
    msgIntentos.innerHTML = intentos;
    document.querySelector("#msgPista").innerHTML = "El numero es menor";
  } else {
    msgIntentos.innerHTML = intentos;
    document.querySelector("#msgPista").innerHTML = "El numero es mayor";
  }
}
