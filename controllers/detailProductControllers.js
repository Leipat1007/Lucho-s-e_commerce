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
                                        <button type="button" class="btn btn-primary mt-3 me-5">Agregar al carrito</button>
                                        <a href="./products.html" class="btn btn-secondary mt-3">Volver</a>
                                    </div>`
    card.innerHTML = cardBody;
    return card;
};
document.addEventListener('DOMContentLoaded', async () => {
    const info = () => {
        const url = new URL(window.location);
        const id = url.searchParams.get('id');
        productService.productoId(id).then((producto) => {
            const { image, nombre, precio, descripcion, id } = producto;
            detailProductCard.appendChild(productCard(image, nombre, precio, descripcion));
    }).catch((error) => {   
            alert('Error al cargar el producto.' + error);	
        });
    }
    info();
});