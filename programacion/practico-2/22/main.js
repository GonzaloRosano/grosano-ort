document.querySelector('#btnCalcular').onclick = function () {
    const totalCompra = parseFloat(document.querySelector('#txtTotalCompra').value);
    const conTarjeta = document.querySelector('#txtConTarjeta').value.toLowerCase();
    let costoFinal = totalCompra;
    if (conTarjeta === 'si' && totalCompra < 10000) {
        costoFinal = totalCompra * 0.96;
    }
    alert('Costo final: $' + costoFinal.toFixed(2));
}
