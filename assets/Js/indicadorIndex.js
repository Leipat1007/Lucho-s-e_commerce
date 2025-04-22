document.addEventListener('DOMContentLoaded', () => {
    const compraExitosa = localStorage.getItem('compraExitosa'); // Verificamos si el indicador existe
    if (compraExitosa) {
        alert('¡Tu compra ha sido exitosa!, !Muchas grcias!,'); // Mostramos la alerta
        localStorage.removeItem('compraExitosa'); // Eliminamos el indicador para que no se repita
    }
});