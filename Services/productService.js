export const productService = {
    // Función para obtener productos
    producto: async () => {
        try {
            const response = await fetch('../bd.json');
            if (!response.ok) {
                throw new Error('Error en la respuesta de la API');
            }
            const data = await response.json();
            return data.Productos;
        } catch (error) {
            console.error('Error al obtener los productos:', error);
            throw error; // Lanzar el error para manejarlo en el controlador
        }
    },
    // Función para obtener un producto por ID
    productoId: async (id) => {
        try {
            const response = await fetch('../bd.json'); 
            if (!response.ok) {
                throw new Error('Error en la respuesta de la API');
            }
            const data = await response.json();
            const producto = data.Productos.find((producto) => producto.id === parseInt(id)); // Buscar el producto por ID
            if (!producto) {
                throw new Error('Producto no encontrado');
            }
            return producto;
        } catch (error) {
            console.error('Error al obtener el producto:', error);
            throw error;
        }
    },
};