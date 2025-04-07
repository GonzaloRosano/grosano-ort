export function obtenerElemento(id) {
  return document.querySelector(`#${id}`);
}

export function addEventListenerToButton(id, callback) {
  document.querySelector(`#${id}`).addEventListener("click", callback);
}
