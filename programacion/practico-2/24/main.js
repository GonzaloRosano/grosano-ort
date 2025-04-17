document.querySelector("#btnAgregar").addEventListener("click", agregar);

let totalSueldos = 0;
let cantidadEmpleados = 0;
let sueldoBajo = Infinity;

function agregar() {
  let sueldo = Number(document.querySelector("#txtSueldo").value);
  totalSueldos += sueldo;
  cantidadEmpleados++;
  if (sueldo < sueldoBajo) {
    sueldoBajo = sueldo;
  }
  document.querySelector("#txtSueldo").value = "";
  document.querySelector("#txtSueldo").focus();
  document.querySelector("#msgTotalSueldos").innerHTML = totalSueldos;
  document.querySelector("#msgCantidadEmpleados").innerHTML = cantidadEmpleados;
  document.querySelector("#msgSueldoBajo").innerHTML = sueldoBajo;
}
