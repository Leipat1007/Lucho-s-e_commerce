import { EliminarProducto, crearCarrito, crearSubtotal, crearTotal } from "../assets/Js/cartFunciones.js"; // Importar las funciones para eliminar y crear el carrito de compras
let datos = localStorage.getItem("cart"); // Obtener el carrito de compras del localStorage
let cart = JSON.parse(datos); // Convertir el carrito de compras a un objeto JavaScript
// Verifica si hay productos en el carrito
const cartVacio = () => {
    if (!cart || cart.length === 0) {
        // Si no hay productos, redirigir al usuario a la página de productos
        alert("No hay productos en el carrito");
        window.location.href = "products.html";
    };
};
cartVacio(); // Llamar a la función para verificar si el carrito está vacío y subtotal
cart.forEach((producto) => {
    const { image, nombre, stock, precio, id, cantidad } = producto; // Desestructurar el objeto producto
    crearCarrito(image, nombre, stock, precio, id, cantidad); // Crear el carrito de compras para cada producto
    crearSubtotal(nombre, id, precio, cantidad); // Crear el subtotal para cada producto
});
crearTotal(cart); // Crear el total del carrito de compras
// Agregar evento de cambio a los inputs de cantidad
const inputsCantidad = document.querySelectorAll(".cantidad"); // Obtener todos los inputs de cantidad
inputsCantidad.forEach((input) => {
    input.addEventListener("input", (e) => {
        const id = parseInt(input.getAttribute("data-id")); // Obtener el id del producto
        const nuevaCantidad = parseInt(input.value) || 1; // Obtener la cantidad seleccionada (por defecto 1)
        // Actualizar la cantidad en el carrito
        cart = cart.map((producto) => {
            if (producto.id === id) {
                producto.cantidad = nuevaCantidad; // Actualizar la cantidad del producto
            }
            return producto;
        });
        // Guardar el carrito actualizado en el Local Storage
        localStorage.setItem("cart", JSON.stringify(cart));
        // Actualizar el subtotal dinámicamente
        const producto = cart.find((producto) => producto.id === id);
        if (producto) {
            crearSubtotal(producto.nombre, producto.id, producto.precio, producto.cantidad);
        }
        // Actualizar el total del carrito
        crearTotal(cart); // Calcular el total del carrito nuevamente
    });
});
const btnEliminar = document.querySelectorAll(".eliminarProducto"); // Obtener todos los botones de eliminar producto
btnEliminar.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        e.preventDefault(); // Prevenir el comportamiento por defecto del botón
        const id = parseInt(btn.getAttribute('data-id')); // Obtener el id del producto a eliminar
        EliminarProducto(id, cart); // Llamar a la función para eliminar el producto del carrito
        // Actualizar el carrito de compras en el localStorage
        cart = cart.filter((producto) => producto.id !== id); // Filtrar el carrito para eliminar el producto
        localStorage.setItem("cart", JSON.stringify(cart)); // Guardar el carrito actualizado en el localStorage
        //Calcular el total del carrito nuevamente
        crearTotal(cart);
        // Verificar si el carrito está vacío
        cartVacio(); // Llamar a la función para verificar si el carrito está vacío
    });
});