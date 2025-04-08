document.querySelector("#btnAgregar").addEventListener("click", agregar);
document.querySelector("#btnReiniciar").addEventListener("click", reiniciar);
let numeros = [];

function agregar() {
  let numero = Number(document.querySelector("#txtNumeros").value);
  numeros.push(numero);
  document.querySelector("#txtNumeros").value = "";
  document.querySelector("#txtNumeros").focus();

  document.querySelector("#msgNumeros").innerHTML = numeros.join(", ");

  if (numeros.length === 5) {
    document.querySelector("#btnAgregar").disabled = true;
    let multiplosDe5 = 0;
    let mayoresDe20 = 0;
    for (let n of numeros) {
      if (n % 5 == 0) multiplosDe5++;
      if (n > 20) mayoresDe20++;
    }
    document.querySelector("#msgResultado").innerHTML += `
    <br> Múltiplos de 5: ${multiplosDe5} <br> Mayores a 20: ${mayoresDe20}`;
  }
}

function reiniciar() {
  numeros = [];
  document.querySelector("#btnAgregar").disabled = false;
  document.querySelector("#msgNumeros").innerHTML = "";
}
