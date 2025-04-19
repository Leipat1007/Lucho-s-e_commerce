import { productService } from '../services/productService.js';
const seccionProductos = document.getElementById('seccionProductos');
const eliminarFiltroBtn = document.getElementById('eliminarFiltro');
// Función para crear una tarjeta de producto
const cardsContainer = (image, nombre, precio, stock, id) => {
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
                <button class="btn btn-outline-primary w-50 textSize me-1 add-cart" 
                data-id='${id}'
                data-nombre='${JSON.stringify(nombre)}'
                data-precio='${precio}'
                data-image='${image}'
                data-stock='${stock}'>
                Añadir
                </button>
                <a href="./productDetail.html?id=${id}" class="btn btn-outline-secondary text-decoration-none w-50 textSize align-items-center">Detalle<i class="bi bi-arrow-right"></i></a>
            </div>
        </div>`;
    return card;
};
//Función para guardar el id del producto en el localStorage
const addCart = (producto) => {
    let cart = JSON.parse(localStorage.getItem('cart')) || []; // Obtener el carrito del localStorage o inicializarlo como un array vacío
    // Verificar si el producto ya está en el carrito
    const exists = cart.some((item) => item.id === producto.id);
    // Si no está en el carrito, lo agrego
    if (!exists) {
        cart.push(producto); // Agregar el producto al carrito
        // Guardar el carrito actualizado en el localStorage
        localStorage.setItem('cart', JSON.stringify(cart));
        alert('Producto añadido al carrito');
    } else {
        alert('El producto ya está en el carrito');
    }
};

// Función para renderizar productos
const render = (categoria = null) => {
    productService.producto().then((pro) => {
        if (Array.isArray(pro)) {
            seccionProductos.innerHTML = '';
            // Filtrar productos por categoría si se proporciona
            // Si no se proporciona categoría, se mostrarán todos los productos
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
            // Iterar sobre los productos filtrados y crear tarjetas
            // de productos para cada uno
            productoFiltro.forEach(({ image, nombre, precio, stock, id }) => {
                const card = cardsContainer(image, nombre, precio, stock, id);
                seccionProductos.appendChild(card);
            });
            //Defino el boton de agregar al carrito
            const addCartButtons = document.querySelectorAll('.add-cart');
            //Itero sobre los botones de agregar al carrito
            // y les agrego el evento click
            addCartButtons.forEach((button) => {
                button.addEventListener('click', (e) => {
                    // Prevenir el comportamiento por defecto del botón
                    e.preventDefault();
                    //Creamos el objeto del producto a agregar al carrito
                    const productCart = {
                        id: parseInt(button.getAttribute('data-id')), // Obtener el id del producto
                        nombre: JSON.parse(button.getAttribute('data-nombre')), // Obtener el nombre del producto
                        precio: parseFloat(button.getAttribute('data-precio')), // Obtener el precio del producto
                        image: button.getAttribute('data-image'),   // Obtener la imagen del producto
                        stock: parseInt(button.getAttribute('data-stock')),   // Obtener el stock del producto
                        cantidad: 1 // Inicializar la cantidad en 1
                    };
                    addCart(productCart); // Llamo a la función para agregar el producto al carrito
                });
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