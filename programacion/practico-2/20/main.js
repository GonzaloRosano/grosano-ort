document
  .querySelector("#btnVerificar")
  .addEventListener("click", verificarReceta);

function verificarReceta() {
    let azucar = Number(document.querySelector("#txtAzucar").value);
    let harina = Number(document.querySelector("#txtHarina").value)/100;
    let aceite = Number(document.querySelector("#txtAceite").value);
    let agua = Number(document.querySelector("#txtAgua").value);

    let minimo = 99999

    if (azucar < minimo) minimo = azucar
    if (harina < minimo) minimo = harina
    if (aceite < minimo) minimo = aceite
    if (agua < minimo) minimo = agua

    document.querySelector("#msgMenor").innerHTML = minimo
        

//   const valores = {
//     azucar: Number(document.querySelector("#txtAzucar").value),
//     harina: Number(document.querySelector("#txtHarina").value)/100,
//     aceite: Number(document.querySelector("#txtAceite").value),
//     agua: Number(document.querySelector("#txtAgua").value),
//   };

//   const menor = Object.keys(valores).reduce((anterior, actual) => {
//     return valores[anterior] < valores[actual] ? anterior : actual;
//   });

//   document.querySelector("#msgMenor").innerHTML = `${menor}: ${valores[menor]}`;
}

