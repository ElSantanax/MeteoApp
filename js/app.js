const container = document.querySelector('.container');
const resultado = document.querySelector('#resultado');
const formulario = document.querySelector('#formulario');

window.addEventListener('load', () => {
    formulario.addEventListener('submit', buscarClima);
})

function buscarClima(e) {
    e.preventDefault();

    const ciudad = document.querySelector('#ciudad').value;
    const pais = document.querySelector('#pais').value;

    if (ciudad === '' || pais === '') {
        mostrarAlerta('Todos los campos son obligatorios.');
        return;
    }
    consultarApi(ciudad, pais)
}

function mostrarAlerta(mensaje) {
    const alertaError = document.querySelector('.bg-red-100');

    if (!alertaError) {
        const alerta = document.createElement('DIV');

        alerta.classList.add('bg-red-100', 'border-red-400', 'text-red-700', 'px-4', 'py-3', 'rounded', 'max-w-md', 'mx-auto', 'mt-6', 'text-center',);
        alerta.innerHTML = `
            <strong class="font-bold">Error!</strong>
            <span class="block">${mensaje}</span>
        `
        container.appendChild(alerta);

        setTimeout(() => {
            alerta.remove();
        }, 3000);
    }
}

function consultarApi(ciudad, pais) {
    const appId = 'Key';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`

    spinner();
    fetch(url)
        .then(respuesta => respuesta.json())
        .then(datos => {
            limpiarHTML();
            if (datos.cod === '404') {
                mostrarAlerta('Ciudad no encontrada');
                return;
            }
            mostrarClima(datos);
        })
}

function mostrarClima(datos) {
    const { name, main: { temp, temp_max, temp_min } } = datos;
    const centigrados = conversion(temp);
    const max = conversion(temp_max);
    const min = conversion(temp_min);

    const nombreCiudad = document.createElement('P');
    nombreCiudad.innerHTML = `Temperatura actual en ${name}`;
    nombreCiudad.classList.add('text-white', 'font-bold', 'text-3xl');

    const actual = document.createElement('P');
    actual.innerHTML = `${centigrados} &#8451;`;
    actual.classList.add('font-bold', 'text-6xl');

    const tempMax = document.createElement('P');
    tempMax.innerHTML = `Max: ${max} &#8451;`;
    tempMax.classList.add('font-bold', 'text-2xl');

    const tempMin = document.createElement('P');
    tempMin.innerHTML = `Min: ${min} &#8451;`;
    tempMin.classList.add('font-bold', 'text-2xl');

    const resultadoDiv = document.createElement('DIV');
    resultadoDiv.classList.add('text-center', 'text-white');
    resultadoDiv.appendChild(nombreCiudad);
    resultadoDiv.appendChild(actual);
    resultadoDiv.appendChild(tempMax);
    resultadoDiv.appendChild(tempMin);

    resultado.appendChild(resultadoDiv);
}

function conversion(grados) {
    return parseInt(grados - 273.15)
}

function limpiarHTML() {
    while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild)
    }
}

function spinner() {
    limpiarHTML();
    const divSpinner = document.createElement('DIV');
    divSpinner.classList.add('sk-fading-circle')

    divSpinner.innerHTML = `
        <div class="sk-circle1 sk-circle"></div>
        <div class="sk-circle2 sk-circle"></div>
        <div class="sk-circle3 sk-circle"></div>
        <div class="sk-circle4 sk-circle"></div>
        <div class="sk-circle5 sk-circle"></div>
        <div class="sk-circle6 sk-circle"></div>
        <div class="sk-circle7 sk-circle"></div>
        <div class="sk-circle8 sk-circle"></div>
        <div class="sk-circle9 sk-circle"></div>
        <div class="sk-circle10 sk-circle"></div>
        <div class="sk-circle11 sk-circle"></div>
        <div class="sk-circle12 sk-circle"></div>    
    `
    resultado.appendChild(divSpinner);
}
