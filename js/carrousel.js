window.onload = function () {
    const images = [
        // 'imgs/slider/big/fondoMontana.jpg',
        '../imgs/slider/big/1920x750/fondoMontana.jpg',
        // 'imgs/slider/big/coding.jpg',
        '../imgs/slider/big/1920x750/coding.jpg',
        '../imgs/slider/big/fondoMundo.jpg',
        // 'imgs/slider/big/servidor.jpg'
        '../imgs/slider/big/1920x750/servidor.jpg'
    ];

const tiempo_intervalo_milesimas_seg = 3000;
let posicionActual = 0;
let botonRetroceder = document.querySelector('#retroceder');
let botonAvanzar = document.querySelector('#avanzar');
let imagen = document.querySelector('#imagen');
let botonPlay = document.querySelector('#play');
let botonStop = document.querySelector('#stop');
let intervalo;

// Funciones

// Funcion que cambia la foto en la siguiente posicion

function pasarFoto() {
    if (posicionActual >= images.length - 1) {
        posicionActual = 0;
    } else {
        posicionActual++;
    }
    renderizarImagen();
}


// Funcion que cambia la foto en la anterior posicion

function retrocederFoto() {
    if(posicionActual <= 0) {
        posicionActual = images.length - 1;
    } else {
        posicionActual--;
    }
    renderizarImagen();
}


// Funcion que actualiza la imagen de imagen dependiendo de posicionActual

function renderizarImagen () {
    imagen.style.backgroundImage = `url(${images[posicionActual]})`;
}


// Activa el autoplay de la imagen

function playIntervalo() {
    intervalo = setInterval(pasarFoto, tiempo_intervalo_milesimas_seg);
    // Desactivamos los botones de control
    botonAvanzar.setAttribute('disabled', true);
    botonRetroceder.setAttribute('disabled', true);
    botonPlay.setAttribute('disabled', true);
    botonStop.removeAttribute('disabled');

}


// Para el autoplay de la imagen

function stopIntervalo() {
    clearInterval(intervalo);
    // Activamos los botones de control
    botonAvanzar.removeAttribute('disabled');
    botonRetroceder.removeAttribute('disabled');
    botonPlay.removeAttribute('disabled');
    botonStop.setAttribute('disabled', true);
}


// Eventos

botonAvanzar.addEventListener('click', pasarFoto);
botonRetroceder.addEventListener('click', retrocederFoto);
botonPlay.addEventListener('click', playIntervalo);
botonStop.addEventListener('click', stopIntervalo);

// Iniciar
renderizarImagen();
} 