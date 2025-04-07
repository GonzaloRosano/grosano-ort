

// ⭐Ingresar un código de departamento y mostrar en un párrafo el nombre del departamento que le corresponde.
// A - Canelones
// B - Maldonado
// C - Rocha
// D - Treinta y Tres
// E - Cerro Largo
// F - Rivera
// G - Artigas
// H - Salto
// I - Paysandú
// J - Rio Negro
// K - Soriano
// L - Colonia
// M - San José
// N - Flores
// O - Florida
// P - Lavalleja
// Q - Durazno
// R - Tacuarembó
// S - Montevideo

document.querySelector('#btnComprobar').addEventListener('click', comprobar)

function comprobar() {
    let departamento = document.querySelector('#txtDepartamento').value
    
    switch (departamento) {
        case 'A':
            document.querySelector('#msgRespuesta').innerHTML = 'Canelones'
            break;
        case 'B':
            document.querySelector('#msgRespuesta').innerHTML = 'Maldonado'
            break;
        case 'C':
            document.querySelector('#msgRespuesta').innerHTML = 'Rocha'
            break;
        case 'D':
            document.querySelector('#msgRespuesta').innerHTML = 'Treinta y Tres'
            break;
        case 'E':
            document.querySelector('#msgRespuesta').innerHTML = 'Cerro Largo'
            break;
        case 'F':
            document.querySelector('#msgRespuesta').innerHTML = 'Rivera'
            break;    
        case 'G':
            document.querySelector('#msgRespuesta').innerHTML = 'Artigas'
            break;
        case 'H':
            document.querySelector('#msgRespuesta').innerHTML = 'Salto'
            break;
        case 'I':
            document.querySelector('#msgRespuesta').innerHTML = 'Paysandú'
            break;
        case 'J':
            document.querySelector('#msgRespuesta').innerHTML = 'Rio Negro'
            break;
        case 'K':
            document.querySelector('#msgRespuesta').innerHTML = 'Soriano'
            break;
        case 'L':
            document.querySelector('#msgRespuesta').innerHTML = 'Colonia'
            break;
        case 'M':
            document.querySelector('#msgRespuesta').innerHTML = 'San José'
            break;
        case 'N':
            document.querySelector('#msgRespuesta').innerHTML = 'Flores'
            break;
        case 'O':
            document.querySelector('#msgRespuesta').innerHTML = 'Florida'
            break;
        case 'P':
            document.querySelector('#msgRespuesta').innerHTML = 'Lavalleja'
            break;
        case 'Q':
            document.querySelector('#msgRespuesta').innerHTML = 'Durazno'
            break;
        case 'R':
            document.querySelector('#msgRespuesta').innerHTML = 'Tacuarembó'
            break;
        case 'S':
            document.querySelector('#msgRespuesta').innerHTML = 'Montevideo'
            break;
        default:
            document.querySelector('#msgRespuesta').innerHTML = 'No corresponde a ningun departamento'
            break;
    }
}