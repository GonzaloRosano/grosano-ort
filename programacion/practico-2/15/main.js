const departamentos = {
    A: 'Canelones',
    B: 'Maldonado',
    C: 'Rocha',
    D: 'Treinta y Tres',
    E: 'Cerro Largo',
    F: 'Rivera',
    G: 'Artigas',
    H: 'Salto',
    I: 'Paysandú',
    J: 'Rio Negro',
    K: 'Soriano',
    L: 'Colonia',
    M: 'San José',
    N: 'Flores',
    O: 'Florida',
    P: 'Lavalleja',
    Q: 'Durazno',
    R: 'Tacuarembó',
    S: 'Montevideo'
};

document.querySelector('#btnComprobar').addEventListener('click', comprobar);

function comprobar() {
    const departamento = document.querySelector('#txtDepartamento').value.toUpperCase();

    document.querySelector('#msgRespuesta').innerHTML =
        departamentos[departamento] || 'No corresponde a ningun departamento';
}
