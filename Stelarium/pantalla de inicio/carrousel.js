var carrusel = document.querySelector('.carrusel');
var carruselContenedor = document.querySelector('.carrusel-contenedor');
var indiceImagenActual = 0;
var intervaloCambio;


// Función para avanzar al siguiente slide
function avanzarSlide() {
    if (indiceImagenActual < 2) {
        indiceImagenActual++;
    } else {
        indiceImagenActual = 0;
    }
    desplazarCarrusel();
}

// Función para retroceder al slide anterior
function retrocederSlide() {
    if (indiceImagenActual > 0) {
        indiceImagenActual--;
    } else {
        indiceImagenActual = 2;
    }
    desplazarCarrusel();
}

// Función para desplazar el carrusel
function desplazarCarrusel() {
    var desplazamiento = -indiceImagenActual * 100; // Desplaza en múltiplos del ancho de una imagen (100%)
    carruselContenedor.style.transform = `translateX(${desplazamiento}%)`;
}

// Iniciar el intervalo de cambio automático cada 5 segundos
intervaloCambio = setInterval(avanzarSlide, 5000); // 5000 milisegundos = 5 segundos


