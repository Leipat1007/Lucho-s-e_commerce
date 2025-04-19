import { productService } from '../services/productService.js';
const detailProductCard = document.getElementById('detailProductCard');
const productCard = (image, nombre, precio, descripcion, id) => {
    const card = document.createElement('div');
    card.classList.add('row', 'mt-5', 'mb-5');
    const cardBody = ` <div class="col-md-6">
                                       <img src="${image}" alt="${nombre}" class="img-fluid rounded-start" width="300px" height="300px">
                                    </div>
                                    <div class="col-md-6">
                                        <h1 class="fw-bold">${nombre}</h1>
                                        <p class="mt-3">${descripcion}</p>
                                        <h2 class="mt-4">$${precio}</h2>
                                        <button type="button" class="btn btn-primary mt-3 me-5 addCart" data-id=${id}>Agregar al carrito</button>
                                        <a href="./products.html" class="btn btn-secondary mt-3">Volver</a>
                                    </div>`
    card.innerHTML = cardBody;
    return card;
};
//Función para guardar el id del producto en el localStorage
const addCart = (id) => {
    // Obtener el carrito del localStorage o inicializarlo como un array vacío
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    // Verificar si el producto ya está en el carrito
    // Si no está en el carrito, lo agrego
    if (!cart.includes(id)) {
        cart.push(id); // Agregar el id del producto al carrito
        // Guardar el carrito actualizado en el localStorage
        localStorage.setItem('cart', JSON.stringify(cart));
        alert('Producto añadido al carrito');
    }else {
        alert('El producto ya está en el carrito');
    }
};
document.addEventListener('DOMContentLoaded', async () => {
    const info = () => {
        const url = new URL(window.location);
        const id = url.searchParams.get('id');
        productService.productoId(id).then((producto) => {
            const { image, nombre, precio, descripcion, id } = producto;
            detailProductCard.appendChild(productCard(image, nombre, precio, descripcion, id));
            const addCartButton = document.querySelector('.addCart');
            if (addCartButton) { //Valido que el botón exista
                // Agrego el evento al botón de agregar al carrito
                addCartButton.addEventListener('click', (e) => {
                    const id = e.target.dataset.id; // Obtengo el id del producto
                    // Agrego el id al carrito
                    addCart(id);
                });
            }
    }).catch((error) => {   
            alert('Error al cargar el producto.' + error);	
        });
    }
    info();
});