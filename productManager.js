// Manejador de productos
class productManager {
    constructor() {
        this.productos = [];
    }

    getProductos() {
        return this.productos;
    }

    agregarProducto(producto) {
        if (this.productos.length === 0) {
            producto.id = 1;
        } else {
            producto.id = this.productos[this.productos.length - 1].id + 1;
        }

        this.productos.push(producto);
    }

    getProductById(id) {
        for (const producto of this.productos) {
            if (producto.id === id) {
                return producto;
            }
        }
        return 'Not found';
    }

    getProducts() {
        return this.productos;
    }
}

class producto {
    constructor(title, description, price, urlImg, id, stock) {
        if (!title || !description || !price || !id  === undefined) {
            throw Error("Todos los campos del producto son obligatorios");
        }

        this.nombre = title || ' ';
        this.description = description || ' ';
        this.price = price || 0;
        this.img = urlImg || '/img';
        this.id = id || 0;
        this.cantidad = stock || getRandom();
    }
}

function getRandom() {
    return Math.floor(Math.random() * 31) + 1;
}

// Pruebas
const manejadorProductos = new productManager();

manejadorProductos.agregarProducto(
    new producto("Pan", "1 kilo de pan", 1000, "url/img", 5));

manejadorProductos.agregarProducto(
    new producto("Lechuga", "3 plantas de lechuga", 500, "url/img", 8));

manejadorProductos.agregarProducto(
    new producto("Tomate", "1 kilo de tomate", 800, "url/img", 3));

manejadorProductos.agregarProducto(
    new producto("Caramelos", "Caramelos masticables", 100, "url/img", 10));

const todosLosProductos = manejadorProductos.getProducts();
console.log("Todos los productos:", todosLosProductos);

const productoBuscado = manejadorProductos.getProductById(3);

const productoBuscado2 = manejadorProductos.getProductById(5);

if (productoBuscado !== 'Not found') {
    console.log("Producto encontrado:", productoBuscado.nombre);
} else {
    console.log("Producto no encontrado.");
}

if (productoBuscado2 !== 'Not found') {
    console.log("Producto encontrado:", productoBuscado2.nombre);
} else {
    console.log("Producto no encontrado.");
}


