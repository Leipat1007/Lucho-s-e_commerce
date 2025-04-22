const controlModal = () => {
    const messages = [
        'Procesando tu compra...',
        'Estamos preparando tu pedido...',
        'Tu compra está en camino...',
        'Casi listo...',
        'Listo, tu compra ha sido exitosa...'
    ]; // Array con los mensajes de carga

    const modalBody = document.getElementById('modalBody'); // Seleccionamos el modal
    const modalElement = document.getElementById('dynamicModal'); // Seleccionamos el elemento del modal
    const bootstrapModal = new bootstrap.Modal(modalElement); // Instancia del modal de Bootstrap
    let currentIndex = 0; // Inicializamos el índice en 0
    // Mostramos el modal
    bootstrapModal.show(); // Mostramos el modal
    // Cambiamos el texto del modal cada 2 segundos
    const interval = setInterval(() => {
        modalBody.innerText = messages[currentIndex]; // Cambiamos el texto del modal
        currentIndex++;

        // Si hemos mostrado todos los mensajes, cerramos el modal
        if (currentIndex === messages.length) {
            clearInterval(interval); // Detenemos el intervalo
            setTimeout(() => {
                bootstrapModal.hide(); // Cerramos el modal automáticamente
            }, 2000); // Esperamos 2 segundos antes de cerrar
        }
    }, 2000); // Cada 2 segundos
};
document.addEventListener('DOMContentLoaded', () => {
    const btnComprar = document.getElementById('BtnComprar'); // Obtenemos el botón de comprar
    if (btnComprar) {
        btnComprar.addEventListener('click', (e) => {
            e.preventDefault(); // Prevenimos el comportamiento por defecto del botón
            controlModal(); // Llamamos a la función para mostrar el modal de carga
            //Limpiamos el carrito de compras
            localStorage.removeItem('cart'); // Limpiamos el carrito de compras del localStorage
            // Redirigimos a la página de inicio después de 12 segundos
            setTimeout(() => {
                localStorage.setItem('compraExitosa', 'true'); // Guardamos en el localStorage que la compra fue exitosa
                window.location.href = './index.html'; // Redirigimos a la página de inicio
            }, 12000); // Esperamos 12 segundos antes de redirigir
        });
    } else {
        console.error('El botón con id "BtnComprar" no se encontró en el DOM.');
    }
});