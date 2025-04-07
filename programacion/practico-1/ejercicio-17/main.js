document.querySelector('#btnCalcular').addEventListener('click', calcular)

function calcular() {
    let chirridos = Number(document.querySelector('#txtChirridos').value)
    let temperaturaC = 10 + (chirridos-40)/7
    alert(`La temperatura en Celsius es ${temperaturaC}`)
}