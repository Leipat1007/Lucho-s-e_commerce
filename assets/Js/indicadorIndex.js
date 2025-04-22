document.addEventListener('DOMContentLoaded', () => {
    const compraExitosa = localStorage.getItem('compraExitosa'); // Verificamos si el indicador existe
    if (compraExitosa) {
        alert('¡Tu compra ha sido exitosa!'); // Mostramos la alerta
        localStorage.removeItem('compraExitosa'); // Eliminamos el indicador para que no se repita
    }
});