// Obtener todas las preguntas
var preguntas = document.querySelectorAll('.faq .pregunta');

// Agregar un evento de clic a cada pregunta
preguntas.forEach(function(pregunta) {
    pregunta.addEventListener('click', function() {
        // Encontrar la respuesta correspondiente
        var respuesta = pregunta.querySelector('.respuesta');

        // Toggle para mostrar u ocultar la respuesta con efecto de desplazamiento
        if (respuesta.style.maxHeight === '0px') {
            respuesta.style.maxHeight = respuesta.scrollHeight + 'px';
        } else {
            respuesta.style.maxHeight = '0';
        }
    });
});
