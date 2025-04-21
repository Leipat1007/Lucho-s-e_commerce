const btnRedes = document.getElementById("btnRedes");// Obtener el botón de redes sociales
const redesColapsar = document.getElementById("redesColapsar");// Obtener el contenedor de redes sociales
// Agregar un evento de clic al botón de redes sociales
// Cuando se hace clic, se alterna la clase de animación y el texto del botón
btnRedes.addEventListener("click",  () => {
    if(redesColapsar.classList.contains('disabled')){
        redesColapsar.classList.remove('disabled', 'slide-Up');// Eliminar las clases de animación
        redesColapsar.classList.add('slide-down');// Agregar la clase de animación hacia abajo
        btnRedes.innerHTML = 'Redes sociales <i class="bi bi-chevron-up"></i>'; // Cambiar el texto del botón
    }
    else{
        redesColapsar.classList.remove('slide-down'); // Eliminar la clase de animación hacia abajo
        redesColapsar.classList.add('slide-Up');// Agregar la clase de animación hacia arriba
        redesColapsar.addEventListener('animationend', () => { // Esperar a que termine la animación
            redesColapsar.classList.add('disabled'); // Agregar la clase de deshabilitado al contenedor
        }, {once: true});
        btnRedes.innerHTML = 'Redes sociales <i class="bi bi-chevron-down"></i>'; // Cambiar el texto del botón
    }
});
const btnContacto = document.getElementById("btnContacto"); // Obtener el botón de contacto
const contactoColapsar = document.getElementById("contactoColapsar"); // Obtener el contenedor de contacto
// Agregar un evento de clic al botón de contacto
// Cuando se hace clic, se alterna la clase de animación y el texto del botón
btnContacto.addEventListener("click",  () => {
    if(contactoColapsar.classList.contains('disabled')){
        contactoColapsar.classList.remove('disabled', 'slide-Up');// Eliminar las clases de animación
        contactoColapsar.classList.add('slide-down');// Agregar la clase de animación hacia abajo
        btnContacto.innerHTML = 'Contactanos <i class="bi bi-chevron-up"></i>';// Cambiar el texto del botón
    }
    else{
        contactoColapsar.classList.remove('slide-down');// Eliminar la clase de animación hacia abajo
        contactoColapsar.classList.add('slide-Up');// Agregar la clase de animación hacia arriba
        contactoColapsar.addEventListener('animationend', () => {// Esperar a que termine la animación
            contactoColapsar.classList.add('disabled');// Agregar la clase de deshabilitado al contenedor
        }, {once: true});
        btnContacto.innerHTML = 'Contactanos <i class="bi bi-chevron-down"></i>';// Cambiar el texto del botón
    }
});