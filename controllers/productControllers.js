import { productService } from '../services/productService.js';
const seccionProductos = document.getElementById('seccionProductos');
const eliminarFiltroBtn = document.getElementById('eliminarFiltro');
// Función para crear una tarjeta de producto
const cardsContainer = (image, nombre, precio, id) => {
    const card = document.createElement('div');
    card.classList.add('d-flex', 'justify-content-center', 'align-items-center', 'cardSize', 'border', 'border-1', 'border-secondary', 'rounded-3', 'my-1', 'mx-1');
    card.innerHTML = `
        <div>
            <img src="${image}" alt="${nombre}" class="my-2 mx-0 img-fluid rounded-3 imgSize"/>
        </div>
        <div class="d-flex flex-column justify-content-center align-items-center">
            <span class="py-1">${nombre}</span>
            <span class="py-2">$${precio}</span>
            <div class="d-flex justify-content-between align-items-center flex-row w-100">
                <button class="btn btn-outline-primary w-50 textSize me-1">Añadir</button>
                <a href="./productDetail.html?id=${id}" class="btn btn-outline-secondary text-decoration-none w-50 textSize align-items-center">Detalle<i class="bi bi-arrow-right"></i></a>
            </div>
        </div>`;
    return card;
};
// Función para renderizar productos
const render = (categoria = null) => {
    productService.producto().then((pro) => {
        if (Array.isArray(pro)) {
            seccionProductos.innerHTML = '';
            const productoFiltro = categoria ? pro.filter((producto) => producto.categoria === categoria) : pro;
            if (categoria) {
                eliminarFiltroBtn.disabled = false; // Habilitar el botón
                eliminarFiltroBtn.classList.remove('disabled'); // Quitar clase de estilo deshabilitado
                eliminarFiltroBtn.classList.add('active'); // Agregar clase de estilo activo
            } else {
                eliminarFiltroBtn.disabled = true; // Deshabilitar el botón
                eliminarFiltroBtn.classList.add('disabled'); // Agregar clase de estilo deshabilitado
                eliminarFiltroBtn.classList.remove('active'); // Quitar clase de estilo activo
            }
            productoFiltro.forEach(({ image, nombre, precio, id }) => {
                const card = cardsContainer(image, nombre, precio, id);
                seccionProductos.appendChild(card);
            });
        } else {
            seccionProductos.innerHTML = `<h2 class="text-center">No hay productos disponibles</h2>`;
        }
    }).catch((error) => {
        seccionProductos.innerHTML = `<h2 class="text-center">Error al cargar los productos</h2> ${error}`;
    });
};

// Agregar eventos al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    render();
    document.getElementById('perros').addEventListener('click', () => { render('Perros') });
    document.getElementById('gatos').addEventListener('click', () => { render('Gatos') });
    document.getElementById('aves').addEventListener('click', () => { render('Aves') });
    document.getElementById('peces').addEventListener('click', () => { render('Peces') });
    eliminarFiltroBtn.addEventListener('click', () => { render() });
});