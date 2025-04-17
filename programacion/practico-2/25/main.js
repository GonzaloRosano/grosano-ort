document.querySelector("#btnIniciar").addEventListener("click", iniciar);
let stockInicial = 0;
let clienteMayor = "";
let maxCamarasCompradas = 0;
let cantidadPedidos = 0;

function iniciar() {
  stockInicial = Number(document.querySelector("#txtStock").value);
  document.querySelector("#btnPedir").disabled = false;
  document.querySelector(
    "#msgStock"
  ).textContent = `Stock disponible: ${stockInicial}`;
}

function pedir() {
  const nombreCliente = document.querySelector("#txtNombre").value;
  const cantidad = Number(document.querySelector("#txtCantidad").value);

  if (cantidad <= stockInicial) {
    stockInicial -= cantidad;
    cantidadPedidos++;
    document.querySelector(
      "#msgStock"
    ).textContent = `Stock disponible: ${stockInicial}`;

    if (cantidad > maxCamarasCompradas) {
      maxCamarasCompradas = cantidad;
      clienteMayor = nombreCliente;
    }

    if (stockInicial === 0) {
      document.querySelector("#btnPedir").disabled = true;
    }
  } else {
    alert("No hay suficiente stock disponible para este pedido.");
  }

  document.querySelector(
    "#msgClienteMayor"
  ).textContent = `Cliente con mayor pedido: ${clienteMayor}`;
  document.querySelector(
    "#msgCantidadPedidos"
  ).textContent = `Cantidad de pedidos procesados: ${cantidadPedidos}`;
}

document.querySelector("#btnPedir").addEventListener("click", pedir);
