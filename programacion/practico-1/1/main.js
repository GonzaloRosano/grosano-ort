document.querySelector("#btnFormatText").addEventListener("click", formatearNombre);

function capitalize(text) {
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}

function formatearNombre() {
    let nombre = document.querySelector("#txtNombre").value;
    let apellido = document.querySelector("#txtApellido").value;
    const nombreFormateado = document.querySelector("#spnFormatText");
  
    nombreFormateado.innerText = `${capitalize(apellido)}, ${capitalize(
      nombre
    )} `;
  }