export const EliminarProducto = (id, cart) => {
  const cartContainer = document.getElementById("cartContainer"); // Obtener el contenedor del carrito de compras
  const cartCard = document.getElementById(`cart-item-${id}`); // Obtener la tarjeta del carrito por su id
  const subtotalElement = document.getElementById(`subtotal-${id}`); // Obtener el subtotal del producto por su id
  if (subtotalElement) {    
    subtotalElement.remove(); // Eliminar el subtotal del DOM
  }
  if (cartCard) {
    cartContainer.removeChild(cartCard); // Eliminar la tarjeta del carrito del contenedor
  }
  // Actualizar el carrito en el Local Storage
  cart = cart.filter((producto) => producto.id !== id); // Eliminar el producto del array del carrito
  localStorage.setItem("cart", JSON.stringify(cart)); // Guardar el carrito actualizado en el Local Storage
};
export const crearCarrito = (image, nombre, stock, precio, id, cantidad) => {
  // Crear el contenedor del carrito de compras
  const cartContainer = document.getElementById("cartContainer"); // Obtener el contenedor del carrito de compras
  const cartCard = document.createElement("div");
  cartCard.classList.add("card","my-2","border","border-secondary","d-flex","justify-content-between","align-items-center","flex-row","px-5","rounded-3","cardSize","m-3"); // Agregar clases al contenedor de la tarjeta del carrito
  cartCard.setAttribute("id", `cart-item-${id}`); // Asignar un identificador único a la tarjeta del carrito
  cartCard.innerHTML = `<div>
                                           <button class="btn btn-danger eliminarProducto" data-id='${id}'><i class="bi bi-x-lg"></i></button>
                                        </div>
                                        <div>
                                            <img src="${image}" alt="${nombre}" class="imgSize">
                                        </div>
                                        <div class="d-flex flex-column justify-content-left align-items-left">
                                        <span class="fw-bold">${nombre}</span>
                                        <article class="d-flex flex-row justify-content-between align-items-left px-2 py-5">
                                            <span>SKU: ${stock}</span>
                                            <span class="fst-italic">PRECIO: $${precio}</span>
                                        </article>
                                        <div class="d-flex justify-content-between align-items-center flex-row mt-2 mb-2">
                                            <span>Cantidad: </span>
                                            <input type="number" class="form-control btn btn-success w-50 cantidad" placeholder="${cantidad}" value="${cantidad}" min="1" max="${stock}" data-id='${id}'>
                                        </div>`;
  cartContainer.appendChild(cartCard); // Agregar la tarjeta del carrito al contenedor
};
export const crearSubtotal = (nombre, id, precio, cantidad) => {
    const subTotalCard = document.getElementById('subCart'); // Obtener el contenedor del subtotal
    const subtotal = (precio * cantidad).toFixed(2); // Calcular el subtotal
    let cardContent = document.getElementById(`subtotal-${id}`);
    // Verificar si ya existe un elemento de subtotal para este producto
    if (cardContent) {
        // Si ya existe, actualizar el contenido del subtotal
        cardContent.innerHTML = `<span>${nombre}</span>
                                 <span>x ${cantidad} = $${subtotal} </span>`;
    } else {
        // Si no existe, crear un nuevo elemento div para el subtotal
        cardContent = document.createElement('div');
        cardContent.classList.add('w-100', 'd-flex', 'justify-content-between'); // Agregar clases al nuevo elemento div
        cardContent.setAttribute('id', `subtotal-${id}`); // Asignar un identificador único al nuevo elemento div
        cardContent.innerHTML = `<span>${nombre}</span>
                                 <span>x ${cantidad} = $${subtotal} </span>`;
        subTotalCard.appendChild(cardContent); // Agregar el nuevo elemento div al contenedor del subtotal
    }
};
export const crearTotal = (cart ) => {
    const totalCard = document.getElementById('totalCard'); // Obtener el contenedor del total
    const total = cart.reduce((acc, producto) => {
        return acc + (producto.precio * producto.cantidad); // Calcular el total sumando el subtotal de cada producto
    }, 0); // Inicializar el acumulador en 0
    totalCard.textContent =`$${total.toFixed(2)}`; // Mostrar el total en el contenedor del total
};
