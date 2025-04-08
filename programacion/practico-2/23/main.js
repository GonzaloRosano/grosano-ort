document.querySelector("#btnNotas").addEventListener("click", registrarNota);

let notas = [];

function registrarNota() {
    let nota = Number(document.querySelector("#txtNota").value);
    notas.push(nota);

    let sum = 0, perdidas = 0, buenas = 0, max = notas[0], min = notas[0];
    
    notas.forEach(n => {
        sum += n;
        if (n < 70) perdidas++;
        else if (n > 90) buenas++;
        if (n > max) max = n;
        if (n < min) min = n;
    });

    let promedio = sum / notas.length;
    let salvadas = notas.length - perdidas - buenas;

    document.querySelector("#msgNotas").innerHTML = `
        Perdidas: ${perdidas} <br>
        Salvadas: ${salvadas} <br>
        Muy buenas: ${buenas} <br>
        Promedio: ${promedio.toFixed(2)} <br>
        Máxima: ${max} <br>
        Mínima: ${min} <br>
    `;
}

